"use client";

import { ScrollArea } from "@/registry/ads/ui/scroll-area";
import { Separator } from "@/registry/ads/ui/separator";

function ScrollAreaShowcase() {
  const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Scroll Area */}
      <div className="space-y-4">
        <h6>Basic</h6>
        <div className="w-48">
          <ScrollArea className="border-border h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 leading-none font-medium">Tags</h4>
              {tags.map((tag) => (
                <div key={tag}>
                  <div className="font-body-small">{tag}</div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div className="space-y-4">
        <h6>Horizontal</h6>
        <div className="w-96">
          <ScrollArea className="border-border h-20 w-96 rounded-md border" orientation="horizontal">
            <div className="flex w-max space-x-4 p-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="bg-background-accent flex h-10 w-32 flex-shrink-0 items-center justify-center rounded-md">
                  <span className="font-body-small">Item {i + 1}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Both Directions */}
      <div className="space-y-4">
        <h6>Both Directions</h6>
        <div className="w-96">
          <ScrollArea className="border-border h-64 w-96 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 leading-none font-medium">Large Content</h4>
              <div className="grid w-[600px] grid-cols-3 gap-4">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="bg-background-accent flex h-16 items-center justify-center rounded-md">
                    <span className="font-body-small">Cell {i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Chat Example */}
      <div className="space-y-4">
        <h6>Chat Example</h6>
        <div className="w-80">
          <ScrollArea className="border-border h-80 w-80 rounded-md border">
            <div className="space-y-4 p-4">
              <h4 className="mb-4 leading-none font-medium">Chat Messages</h4>
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="bg-background-brand flex h-8 w-8 items-center justify-center rounded-full">
                      <span className="text-text-inverse font-body-small">{String.fromCharCode(65 + (i % 26))}</span>
                    </div>
                    <div>
                      <p className="font-body-small font-medium">User {i + 1}</p>
                      <p className="font-body-small text-text-subtlest">This is message {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  {i < 19 && <Separator />}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Code Block Example */}
      <div className="space-y-4">
        <h6>Code Block</h6>
        <div className="w-96">
          <ScrollArea className="border-border bg-background-neutral h-64 w-96 rounded-md border">
            <div className="p-4">
              <pre className="font-mono text-sm">
                {`function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

// Generate first 20 fibonacci numbers
const fibNumbers = [];
for (let i = 0; i < 20; i++) {
  fibNumbers.push(fibonacci(i));
}

console.log('First 20 Fibonacci numbers:');
console.log(fibNumbers);

// Calculate sum of all even fibonacci numbers under 100
const evenFibSum = fibNumbers
  .filter(num => num % 2 === 0 && num < 100)
  .reduce((sum, num) => sum + num, 0);

console.log('Sum of even fibonacci numbers under 100:', evenFibSum);`}
              </pre>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default function ScrollAreaPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <ScrollAreaShowcase />
    </div>
  );
}
