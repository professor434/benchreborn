
import React, { useState } from "react";
import { card, cardContent } from "../components/ui/card";
import { button } from "../components/ui/button";
import { input } from "../components/ui/input";
import { table, tableHead, tableRow, tableHeader, tableCell, tableBody } from "../components/ui/table";

const mockTools = [
  { id: 1, name: "Δράπανο Bosch GSB 13 RE", condition: "Καλή", status: "Διαθέσιμο" },
  { id: 2, name: "Πιστόλι Θερμού Αέρα Makita", condition: "Άριστη", status: "Υπό αξιολόγηση" },
  { id: 3, name: "Σέγα Black&Decker 500W", condition: "Χρήζει service", status: "Μη διαθέσιμο" },
];

export default function BenchRebornSaaS() {
  const [tools, setTools] = useState(mockTools);

  return (
    <main className="p-6 bg-[#f8f8f8] min-h-screen">
      <h1 className="text-3xl font-bold mb-6">BenchReborn SaaS Tool Dashboard</h1>

      {/* Upload from Google Sheet */}
      <section className="mb-10">
        <Card className="p-6">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Εισαγωγή από Google Sheet</h2>
            <p className="text-sm mb-4">
              Κάντε paste το shared URL από το Google Sheet με τα διαθέσιμα εργαλεία της επιχείρησής σας:
            </p>
            <Input placeholder="https://docs.google.com/spreadsheets/..." className="mb-4" />
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">Εισαγωγή</Button>
          </CardContent>
        </Card>
      </section>

      {/* Dashboard Preview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Εργαλεία Επιχείρησης</h2>
        <Table className="bg-white shadow-md">
          <TableHeader>
            <TableRow>
              <TableHead>Όνομα Εργαλείου</TableHead>
              <TableHead>Κατάσταση</TableHead>
              <TableHead>Διαθεσιμότητα</TableHead>
            </TableRow>
          </TableHeader>
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
