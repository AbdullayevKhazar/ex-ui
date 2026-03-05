import { Button } from "./Button/Button";
import { Drawer } from "./Drawer/Drawer";

export default function App() {
  return (
    <>
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
