"use client";

import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from "@/registry/ads/ui/table";

function TableShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Table */}
      <div className="space-y-4">
        <h6>Basic Table</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Table>
              <TableCaption>A list of recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV002</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <span className="font-body-small text-text-subtlest">basic table</span>
          </div>
        </div>
      </div>

      {/* Table with Footer */}
      <div className="space-y-4">
        <h6>Table with Footer</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Item</TableHead>
                  <TableHead>Qty</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Widget A</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell className="text-right">$20.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Widget B</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell className="text-right">$15.00</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell className="text-right">$35.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
            <span className="font-body-small text-text-subtlest">with footer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TablePage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <TableShowcase />
    </div>
  );
}
