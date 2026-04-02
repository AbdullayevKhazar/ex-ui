import { ThemeProvider } from "./theme/theme";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
} from "./Accordion/Accordion";
import { ThemeToggle } from "./theme/ThemeToggle";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <ThemeToggle />
      <div className="max-w-3xl mx-auto p-6 space-y-8">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Accordion</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Accordion komponenti istifadəçilərə məzmunu açıb-bağlamağa imkan
            verir.
          </p>
        </div>

        {/* Basic Usage */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Basic istifadə</h2>
          <Accordion className="rounded-lg">
            <AccordionHeader>What is React?</AccordionHeader>
            <AccordionContent>
              React is a free and open-source front-end JavaScript library for
              building user interfaces.
            </AccordionContent>
          </Accordion>
        </div>

        {/* Multiple Example */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Multiple items</h2>

          <Accordion className="rounded-lg">
            <AccordionHeader>What is React?</AccordionHeader>
            <AccordionContent>
              React is a JavaScript library for building UI.
            </AccordionContent>
          </Accordion>

          <Accordion className="rounded-lg">
            <AccordionHeader>What is Tailwind CSS?</AccordionHeader>
            <AccordionContent>
              Tailwind CSS is a utility-first CSS framework.
            </AccordionContent>
          </Accordion>
        </div>

        {/* Props */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Props</h2>

          <div className="border rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-neutral-100 dark:bg-neutral-800 p-3 font-medium">
              <span>Prop</span>
              <span>Type</span>
              <span>Description</span>
            </div>

            <div className="grid grid-cols-3 p-3 border-t">
              <span>className</span>
              <span>string</span>
              <span>Custom styles əlavə etmək üçün</span>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Code example</h2>

          <pre className="bg-neutral-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
            {`<Accordion>
  <AccordionHeader>Title</AccordionHeader>
  <AccordionContent>
    Content here...
  </AccordionContent>
</Accordion>`}
          </pre>
        </div>
      </div>
    </ThemeProvider>
  );
}
