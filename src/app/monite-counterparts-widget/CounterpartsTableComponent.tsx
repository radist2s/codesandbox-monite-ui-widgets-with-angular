import { useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  CounterpartsTable,
  MoniteProvider,
} from "@team-monite/ui-widgets-react";
import { MoniteSDK } from "@team-monite/sdk-api";

export function CounterpartsTableComponent() {
  const monite = useMemo(
    () =>
      new MoniteSDK({
        apiUrl: "https://api.sandbox.monite.com/v1",
        entityId: "3a71f862-e8a4-415b-840e-a85b6d1f0d27",
        fetchToken: async () => ({
          access_token: "foo",
          token_type: "bar",
          expires_in: 100000,
        }),
      }),
    []
  );

  return (
    <div className="App" style={{ display: "flex", height: "100vh" }}>
      <MoniteProvider monite={monite} locale={{ currencyLocale: "en-US" }}>
        <BrowserRouter>
          <CounterpartsTable />
        </BrowserRouter>
      </MoniteProvider>
    </div>
  );
}
