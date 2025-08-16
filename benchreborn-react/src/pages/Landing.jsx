
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-[#1a1a1a] font-sans">
      <section className="bg-[#0f1c24] text-white py-16 px-4 text-center">
        <h1 className="text-5xl font-bold tracking-tight">BenchReborn</h1>
        <p className="mt-4 text-xl">Tools Reborn. Business Reforged.</p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Button className="text-lg px-6 py-3 bg-orange-600 hover:bg-orange-700">Δήλωσε Εργαλεία</Button>
          <Button variant="outline" className="text-lg px-6 py-3 border-white text-white hover:bg-white hover:text-black">
            Νοίκιασε Τώρα
          </Button>
        </div>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Διαθέσιμα Εργαλεία</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-4">
                <img src={`/tools/tool${i + 1}.png`} alt={`Tool ${i + 1}`} className="w-full h-40 object-contain mb-4" />
                <h3 className="text-xl font-semibold">Εργαλείο {i + 1}</h3>
                <p className="text-sm text-muted-foreground">Μεταχειρισμένο - Πιστοποιημένο - Έτοιμο για χρήση</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#ececec] py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Για Επιχειρήσεις</h2>
        <p className="text-center max-w-3xl mx-auto mb-6">
          Έχετε αχρησιμοποίητα εργαλεία που κάθονται στα ράφια; Δηλώστε τα εύκολα με τη φόρμα εισαγωγής και αφήστε μας να
          αξιολογήσουμε και να τα διανείμουμε. Εσείς κερδίζετε – τα εργαλεία αναγεννιούνται.
        </p>
        <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Φόρμα Εργαλείων</h3>
          <form className="grid gap-4">
            <Input placeholder="Επωνυμία Εταιρείας" />
            <Input placeholder="Τύπος Εργαλείου" />
            <Input placeholder="Κατάσταση / Περιγραφή" />
            <Input placeholder="Email Επικοινωνίας" type="email" />
            <Button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white">
              Υποβολή
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
