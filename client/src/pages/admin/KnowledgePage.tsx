import { useEffect, useState } from 'react';
import { api } from '@/services/api';
import { Button } from '@/components/ui/button';

interface KnowledgeItem {
  id: string;
  title: string;
  content: string;
  created_at?: string;
}

const KnowledgePage = () => {
  const [items, setItems] = useState<KnowledgeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const fetchItems = () => {
    setLoading(true);
    api.knowledge.list()
      .then((data) => setItems(data as KnowledgeItem[]))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleCreate = () => {
    if (!newTitle || !newContent) return;
    api.knowledge.create({ title: newTitle, content: newContent })
      .then(() => {
        setNewTitle('');
        setNewContent('');
        fetchItems();
      })
      .catch(console.error);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Knowledge Base Admin</h1>
      <div className="mb-6">
        <input
          className="border p-2 mr-2"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          className="border p-2 mr-2"
          placeholder="Content"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <Button onClick={handleCreate}>Add</Button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="border p-4 rounded">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-sm text-muted-foreground">{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default KnowledgePage;
