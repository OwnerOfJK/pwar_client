import { PixelawCore } from "@pixelaw/core";
import { DojoWallet } from "@pixelaw/core-dojo";
import { Position } from "@pixelaw/core";
import { DefaultParameters, PixelUpdate } from '@/config/models.gen';

export class PwarContractService {
  private account: any;
  private provider: any;

  constructor(account: any, provider: any) {
    this.account = account;
    this.provider = provider;
  }

  async update_pixel(x: number, y: number) {
    console.log(`Interact called with Position ${x} and ${y}`);

    //This should use the Default Parameters (imported use it here)
    //verify the selector using sozo execute with inputs to make sure everything fits.

      const pixelUpdate: PixelUpdate = {
        x: x,
        y: y,
        color: 0xffffff, // Example color (white)
        owner: "0x123456789abcdef123456789abcdef123456789abcdef123456789abcdef1234", // Example owner address
        app: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcd", // Example app address
        text: null, // No text
        timestamp: Date.now(), // Current timestamp
        action: null // No action
      }

    try {
      return await this.provider.execute(
        this.account,
        {
          contractAddress: "0x052cf765ad094d9edb5787f47cfd3a0682ff35006995e8146b55e73c3c600be4", // pixelaw-actions
          entrypoint: "update_pixel",
          calldata: [
            "0x1", // ref world
            "0x1", // for_player
            "0x1", // for_system
            pixelUpdate, // PixelUpdate serialized
            "0x1", // area_id_hint (example: 0)
            true // allow_modify (example: true)
          ]
        }
      );
    } catch (error) {
      console.error("Failed to interact with pixel:", error);
      throw error;
    }
  }
  
  async interact(x: number, y: number) {
    console.log(`Interact called with Position ${x} and ${y}`);

    //This should use the Default Parameters (imported use it here)
    //verify the selector using sozo execute with inputs to make sure everything fits.

    // const parameters : DefaultParameters = {
    // player_override: new CairoOption(CairoOptionVariant.None),
    // system_override: new CairoOption(CairoOptionVariant.None),
    // area_hint: new CairoOption(CairoOptionVariant.None),
    // position: { x: 0, y: 0, },
    //   color: 0,
    // };

    try {
      return await this.provider.execute(
        this.account,
        {
          contractAddress: "0x038a25bf54d8ac997378c3322e321687bd95f48721ebce642bba8dfbdd5ca124", // p_war-p_war_actions
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