import { ArrowRightIcon, ShoppingCartIcon } from "lucide-react";
import { ProductBox } from "./Box/Box";
import { Button } from "./Button/Button";
import { Otp } from "./Otp/Otp";
import { ThemeProvider } from "./theme/theme";
import { ThemeToggle } from "./theme/ThemeToggle";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <main className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
        <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 px-4 py-10">
          <ThemeToggle />

          <section className="flex gap-4 w-full rounded-2xl border border-secondary/20 bg-white p-6 shadow-sm transition-colors dark:border-secondary/30 dark:bg-gray-900">
        
           
             <ProductBox
              imageSrc="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg"
              title="Product 1"
              price={"100 AZN"}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              "
              badge="New"
              buttonText="Add to cart"
              onActionClick={() => alert("Product 1 added to cart")}
            />
             <ProductBox
              imageSrc="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg"
              title="Product 1"
              price={"100 AZN"}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              "
              badge="New"
              buttonText="Add to cart"
              onActionClick={() => alert("Product 1 added to cart")}
            />
          </section>
          <Button
          variant="primary"
          size="md"
          rounded="md"
          isLoading={false}
          leftIcon={<ShoppingCartIcon />}
          rightIcon={<ArrowRightIcon />}
          >
          Add to cart</Button>
        </div>
      </main>
    </ThemeProvider>
  );
}
