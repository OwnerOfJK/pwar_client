import { Position } from "@pixelaw/core";
import { DefaultParameters } from '@/config/models.gen';

export class PwarContractService {
  private account: any;
  private provider: any;
  private world: any;

  constructor(wallet: any, provider: any, world: any) {
    
    this.account = wallet;
    this.provider = provider;
    this.world = world;
  }
  
  async interact(x: number, y: number) {
    const position: Position = { x: x, y: y };
    console.log(`Interact called with ${position.x}, ${position.y}`);
    console.log("Account", this.account);
    console.log("Provider", this.provider);
    console.log("World", this.world);

    try {
      this.world.p_war_actions.interact(this.account, {
        player_override: this.account?.address || "0x1",
          system_override: "0x1",
          area_hint: "0x1",
          position: position,
          color: 255
        } as DefaultParameters
      );
      // return await this.provider.execute(
      //   this.account,
      //   {
      //     contractAddress: "0x02f3dad854016a24174a0cfdd3f5c72c1ef5b0320d28eba044e73467c53f385a", // p_war-p_war_actions
      //     entrypoint: "interact",
      //     calldata: [
      //       "0x1",
      //       "0x1",
      //       "0x1",
      //       x,
      //       y,
      //       255
      //     ]
      //   }
      // );
    } catch (error) {
        console.error("Failed to interact with pixel:", error);
      throw error;
    }
  }
} 