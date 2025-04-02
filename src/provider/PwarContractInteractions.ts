import { PixelawCore } from "@pixelaw/core";
import { DojoWallet } from "@pixelaw/core-dojo";
import { Position } from "@pixelaw/core";
import { DefaultParameters } from "@pixelaw/core-dojo/generated/models.gen.ts"

export class PwarContractService {
  private account: any;
  private provider: any;

  constructor(account: any, provider: any) {
    this.account = account;
    this.provider = provider;
  }
  
  async interact(x: number, y: number) {
    console.log(`Interact called with Position ${x} and ${y}`);

    //This should use the Default Parameters (imported use it here)
    //verify the selector using sozo execute with inputs to make sure everything fits.
    try {
      return await this.provider.execute(
        this.account,
        {
          //contractAddress: "0x00af6854b90b294223050a2bb369e7e4ca386fe251a5f6ccbdcdc335c9e7b052",
          contractAddress: "0x074d62337ea2319f3e65d75cda97bc8691a3e0e6c5efc12ceb3e982c3caf62f8",
          entrypoint: "interact",
          calldata: [
            "0x1",
            "0x1",
            "0x1",
            x,
            y,
            255
          ]
        }
      );
    } catch (error) {
      console.error("Failed to interact with pixel:", error);
      throw error;
    }
  }
} 