import NavBar from "@/components/NavBar";

const Settings = () => {
  return (
    <>
      <NavBar />
      <main className="p-4 m-0 flex flex-col gap-2 justify-center">
        <section>
          <p className="text-xl font-semibold">Token</p>

          <div className="px-2">
            <p>
              Your API Token is:{" "}
              <span className="font-semibold">undefined</span>
            </p>
            <div className="flex gap-2">
              <button className="bg-blue-100 hover:bg-blue-200 py-2 px-4 rounded">
                Claim API Key
              </button>
              <button className="bg-blue-100 hover:bg-blue-200 py-2 px-4 rounded">
                Regenerate Token
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Settings;
