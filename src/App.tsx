import { ProductBox } from "./Box/Box";
import { Button } from "./Button/Button";
import { Drawer } from "./Drawer/Drawer";

export default function App() {
  return (
    <>
      <ProductBox
        title="Premium Qulaqlıq"
        description="Aktiv səs-küy ləğvetmə (ANC) xüsusiyyətli simsiz qulaqlıq."
        price="120.00 ₼"
        oldPrice="180.00 ₼"
        badge="Yeni"
        buttonText="Səbətə əlavə et"
        imageSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
        onActionClick={() => console.log("created")}
      />
      <Drawer
        position="top"
        content={
          <div className="p-5">
            <h2 className="text-xl font-bold">
              Salam! Bu mənim Drawer İçəriymdir.
            </h2>
            <p>İstədiyim dizaynı burada qura bilərəm.</p>
          </div>
        }
      >
        <Button>menyunu ac</Button>
      </Drawer>
      <Drawer
        position="bottom"
        content={
          <div className="p-5 h-[150vh]">
            <h2 className="text-xl font-bold">
              Salam! Bu mənim Drawer İçəriymdir.
            </h2>
            <p>İstədiyim dizaynı burada qura bilərəm.</p>
          </div>
        }
      >
        <Button>menyunu ac</Button>
      </Drawer>
      <Drawer
        position="left"
        content={
          <div className="p-5 h-[150vh]">
            <h2 className="text-xl font-bold">
              Salam! Bu mənim Drawer İçəriymdir.
            </h2>
            <p>İstədiyim dizaynı burada qura bilərəm.</p>
          </div>
        }
      >
        <Button>menyunu ac</Button>
      </Drawer>
      <Drawer
        position="right"
        content={
          <div className="p-5">
            <h2 className="text-xl font-bold">
              Salam! Bu mənim Drawer İçəriymdir.
            </h2>
            <p>İstədiyim dizaynı burada qura bilərəm.</p>
          </div>
        }
      >
        <Button className=""> menyunu ac</Button>
      </Drawer>
    </>
  );
}
