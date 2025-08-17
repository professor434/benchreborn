import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
} from "../components/ui/table";

const mockTools = [
  { id: 1, name: "Αδράχνη Bosch GB 13 RE", condition: "Καλή", status: "Διαθέσιμο" },
  { id: 2, name: "Πολύμετρο Εφορια ABΦ Κατάτα", condition: "Άριστη", status: "Υπό αξιολόγηση" },
  { id: 3, name: "Έγγυ Black&Decker 500W", condition: "Χρήζει service", status: "Μη διαθέσιμο" },
];

export default function BenchRebornSaaS() {
  const [tools, setTools] = useState(mockTools);
  const [sheetUrl, setSheetUrl] = useState("");

  // Handle Google Sheet submit
  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sheetUrl }),
      });

      if (res.ok) {
        alert("Το Google Sheet στάλθηκε με επιτυχία!");
        setSheetUrl("");
      } else {
        alert("Κάτι πήγε στραβά.");
      }
    } catch (err) {
      console.error(err);
      alert("Σφάλμα κατά την αποστολή.");
    }
  };

  return (
    <main className="p-6 bg-[#f5f5f5] min-h-screen">
      <h1 className="text-3xl font-bold mb-6">BenchReborn SaaS Tool Dashboard</h1>

      {/* Upload from Google Sheet */}
      <section className="mb-8">
        <Card className="p-6">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Εισαγωγή από Google Sheet</h2>
            <p className="text-sm mb-4">
              Κάντε paste το shared URL από το Google Sheet με τα διαθέσιμα εργαλεία της επιχείρησής σας:
            </p>
            <input
              value={sheetUrl}
              onChange={(e) => setSheetUrl(e.target.value)}
              placeholder="https://docs.google.com/spreadsheets/..."
              className="w-full border rounded-md p-2 mb-4"
            />
            <Button onClick={handleSubmit}>Εισαγωγή</Button>
          </CardContent>
        </Card>
      </section>

      {/* Dashboard preview */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Εργαλεία Επιχείρησης</h2>
        <Table className="bg-white shadow-md">
          <TableHead>
            <TableRow>
              <TableHeader>Όνομα Εργαλείου</TableHeader>
              <TableHeader>Κατάσταση</TableHeader>
              <TableHeader>Διαθεσιμότητα</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {tools.map((tool) => (
              <TableRow key={tool.id}>
                <TableCell>{tool.name}</TableCell>
                <TableCell>{tool.condition}</TableCell>
                <TableCell>{tool.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
