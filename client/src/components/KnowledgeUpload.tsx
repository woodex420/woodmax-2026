import { useState } from 'react';
import { Upload, FileText, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

export const KnowledgeUpload = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (selectedFile.type !== 'application/pdf' && !selectedFile.type.includes('text')) {
      toast({
        title: 'Invalid file type',
        description: 'Please upload a PDF or text file',
        variant: 'destructive',
      });
      return;
    }

    setFile(selectedFile);
    
    // If it's a text file, read its content
    if (selectedFile.type.includes('text')) {
      const text = await selectedFile.text();
      setContent(text);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !content) {
      toast({
        title: 'Missing information',
        description: 'Please provide both title and content',
        variant: 'destructive',
      });
      return;
    }

    setIsUploading(true);

    try {
      let fileUrl = null;

      // Upload file if exists
      if (file) {
        const fileName = `${Date.now()}-${file.name}`;
        const { error: uploadError } = await supabase.storage
          .from('customer-documents')
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('customer-documents')
          .getPublicUrl(fileName);

        fileUrl = publicUrl;
      }

      // Save to business knowledge
      const { error } = await supabase.from('business_knowledge').insert({
        title,
        content,
        file_url: fileUrl,
        category: 'business_model',
      });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Business knowledge added successfully. AI is now trained with this information.',
      });

      // Reset form
      setTitle('');
      setContent('');
      setFile(null);
      
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: 'Error',
        description: 'Failed to upload knowledge. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Train AI Assistant</CardTitle>
        <CardDescription>
          Upload business documents to train the AI support agent
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Document Title</Label>
            <Input
              id="title"
              placeholder="e.g., Product Catalog, Pricing Guide, Company Policy"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Paste document content here or upload a file below..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file">Upload Document (Optional)</Label>
            <div className="flex items-center gap-2">
              <Input
                id="file"
                type="file"
                accept=".pdf,.txt,.doc,.docx"
                onChange={handleFileChange}
                className="flex-1"
              />
              {file && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  {file.name}
                </div>
              )}
            </div>
          </div>

          <Button type="submit" disabled={isUploading} className="w-full">
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload Knowledge
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};