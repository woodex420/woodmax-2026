import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Upload, FileText, Trash2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const KnowledgeBase = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('general');
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: knowledge } = useQuery({
    queryKey: ['business-knowledge'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('business_knowledge')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const seedInitialKnowledge = useMutation({
    mutationFn: async () => {
      const initialKnowledge = [
        {
          title: 'WoodEx Company Overview',
          content: 'WoodEx is Pakistan\'s premier B2B office furniture platform, serving 1,200+ satisfied clients nationwide. We are a Lahore-based manufacturer offering 56 premium products across 11 categories. Our unique value proposition includes factory-direct pricing, 5-7 year warranty coverage, free 3D design services, and nationwide delivery with professional installation. We operate Pakistan\'s first digital B2B furniture platform, revolutionizing how businesses purchase office furniture.',
          category: 'company',
        },
        {
          title: 'Product Portfolio',
          content: 'WoodEx offers 56 premium products across 11 categories: 1) Office Chairs (executive, mesh, ergonomic) 2) Office Desks (executive, standing, modular) 3) Workstations (complete desk systems) 4) Conference Tables 5) Meeting Room Furniture 6) Reception Desks 7) Storage Solutions (cabinets, filing, shelving) 8) Executive Furniture 9) Lounge Furniture 10) Bookshelf Systems 11) Office Accessories. All products come with 5-7 year warranty and are manufactured in our Lahore facility.',
          category: 'products',
        },
        {
          title: 'Services and Solutions',
          content: 'WoodEx provides 360-degree office solutions: 1) FREE Space Planning and 3D Design - professional consultants create optimal layouts 2) Custom Design Studio - bespoke furniture with 200+ material/color options, 6-8 week production 3) Project Quoting - instant online quotations with transparent pricing 4) Factory Direct Manufacturing - Lahore-based production ensuring quality control 5) Nationwide Delivery and Installation - covering all major Pakistani cities with professional assembly teams 6) Post-Installation Support - warranty activation and ongoing customer service.',
          category: 'services',
        },
        {
          title: 'Warranty and Quality',
          content: 'Industry-leading 5-7 year comprehensive warranty on all products. Our quality assurance includes: expert craftsmanship with 25+ years experience, rigorous quality inspections before delivery, durable materials and construction, compliance with international standards, and post-installation support. We stand behind our products with one of the longest warranties in Pakistan\'s furniture industry.',
          category: 'warranty',
        },
        {
          title: 'Pricing and Business Model',
          content: 'Factory-direct pricing eliminates middlemen, offering 20-30% cost savings. Quote-first strategy ensures transparency - customers receive detailed quotations before commitment. We serve B2B clients including corporate offices, government institutions, educational facilities, healthcare centers, and co-working spaces. Flexible payment terms available for bulk orders and long-term partnerships. Volume discounts for large projects.',
          category: 'pricing',
        },
        {
          title: 'Delivery Coverage',
          content: 'Nationwide delivery across Pakistan covering: Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Gujranwala, Peshawar, Quetta, Sialkot, and all major cities. Professional installation teams ensure proper assembly. Typical delivery timeline: 2-4 weeks for standard products, 6-8 weeks for custom designs. Express delivery available for urgent projects.',
          category: 'delivery',
        },
        {
          title: 'Customer Success Stories',
          content: 'Serving 1,200+ satisfied clients across Pakistan including leading corporations, government offices, educational institutions, and growing startups. Our clients choose WoodEx for reliability, quality craftsmanship, transparent pricing, comprehensive warranties, and end-to-end project management. We handle projects from single items to complete office fitouts of 500+ workstations.',
          category: 'clients',
        },
        {
          title: 'Quote Process',
          content: 'Easy 3-step quotation process: 1) Submit requirements via online form or consultation 2) Receive detailed quotation within 24-48 hours with itemized pricing, specifications, delivery timeline 3) Approve and proceed with order. No hidden costs. What you see is what you pay. Free consultations and site visits for large projects. Dedicated account managers for B2B clients.',
          category: 'process',
        },
      ];

      const { error } = await supabase.from('business_knowledge').insert(initialKnowledge);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['business-knowledge'] });
      toast({ title: 'Success', description: 'Initial knowledge base populated successfully' });
    },
    onError: () => {
      toast({ title: 'Error', description: 'Failed to seed knowledge base', variant: 'destructive' });
    },
  });

  const addKnowledge = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from('business_knowledge').insert({
        title,
        content,
        category,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['business-knowledge'] });
      setTitle('');
      setContent('');
      toast({ title: 'Success', description: 'Knowledge added successfully' });
    },
    onError: () => {
      toast({ title: 'Error', description: 'Failed to add knowledge', variant: 'destructive' });
    },
  });

  const deleteKnowledge = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('business_knowledge').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['business-knowledge'] });
      toast({ title: 'Success', description: 'Knowledge deleted' });
    },
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      toast({ title: 'Error', description: 'Only PDF files are supported', variant: 'destructive' });
      return;
    }

    setUploading(true);
    try {
      // Read PDF content (simplified - in production use a proper PDF parser)
      const text = await file.text();
      setContent(text);
      setTitle(file.name.replace('.pdf', ''));
      toast({ title: 'Success', description: 'PDF content extracted' });
    } catch (error) {
      console.error('PDF upload error:', error);
      toast({ title: 'Error', description: 'Failed to process PDF', variant: 'destructive' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">AI Training - Knowledge Base</h1>
          {(!knowledge || knowledge.length === 0) && (
            <Button onClick={() => seedInitialKnowledge.mutate()} disabled={seedInitialKnowledge.isPending}>
              {seedInitialKnowledge.isPending ? 'Loading...' : 'Load WoodEx Business Knowledge'}
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Add Knowledge Form */}
          <Card>
            <CardHeader>
              <CardTitle>Add Business Knowledge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Upload PDF</label>
                <label className="flex items-center gap-2 p-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent">
                  <Upload className="h-5 w-5" />
                  <span className="text-sm">{uploading ? 'Processing...' : 'Upload Business Model PDF'}</span>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    disabled={uploading}
                  />
                </label>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Title</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., WoodEx Product Catalog"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <Input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="e.g., products, services, policies"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Content</label>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter knowledge content or upload PDF above"
                  rows={10}
                />
              </div>

              <Button 
                onClick={() => addKnowledge.mutate()}
                disabled={!title || !content || addKnowledge.isPending}
                className="w-full"
              >
                Add Knowledge
              </Button>
            </CardContent>
          </Card>

          {/* Knowledge List */}
          <Card>
            <CardHeader>
              <CardTitle>Existing Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {knowledge?.map((item) => (
                  <div key={item.id} className="p-4 border rounded-lg flex justify-between items-start">
                    <div className="flex gap-3 flex-1">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">Category: {item.category}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.content.substring(0, 100)}...
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteKnowledge.mutate(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                {!knowledge || knowledge.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    No knowledge added yet. Upload PDFs or add content above.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KnowledgeBase;
