import NavBar from "@/components/NavBar";

const QRCode = () => {
  return (
    <>
      <NavBar />
      <main className="p-4 m-0 flex flex-col gap-2 justify-center md:w-3/4 xl:w-1/2 w-full">
        <section>
          <p className="text-xl font-semibold">Playground</p>

          <form className="flex flex-col gap-2">
            <div>
              <span className="p-2">Data</span>
              <span className="p-2">
                <input
                  className="py-2 px-4 rounded border border-blue-400 w-full"
                  type="text"
                  name="qr-data"
                  placeholder="QRCode Data"
                />
              </span>
            </div>
            <div className="ml-2">
              <button className="bg-blue-100 hover:bg-blue-200 py-2 px-4 rounded">
                Generate QRCode
              </button>
            </div>
          </form>

          <div className="py-4">
            <span className="p-2">QRCode will be shown here</span>
          </div>
        </section>
        <section>
          <p className="text-xl font-semibold">API</p>

          <div>
            <span className="p-2">URL:</span>
            <span className="p-2">
              https://baseurl.blablabla.app/api/qrcode
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default QRCode;
