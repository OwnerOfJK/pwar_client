import { usePixelawProvider } from "@pixelaw/react"
import { useEffect, useRef } from "react"
// import { Position, type Coordinate } from "@pixelaw/core"
import { Coordinate, Position, PixelStore } from "@pixelaw/core"
import styles from "./PwarPage.module.css"
import { PwarProvider, usePwarProvider } from "@/Provider/PwarProvider"
import { ProposalList } from "@/components/Pwar/Proposal/ProposalList"
import { setupWorld } from "@/config/contracts.gen"
import { DojoWallet } from "@pixelaw/core-dojo"
// import { PwarProvider } from "@/Provider/PwarProvider"

// The content of the Pwar page, wrapped by PwarProvider
const PwarPageContent: React.FC = () => {
    const { pixelawCore, coreStatus } = usePixelawProvider()
    const { viewPort: renderer, pixelStore: pixelstore } = pixelawCore
    const rendererContainerRef = useRef<HTMLDivElement | null>(null)
    const { interact } = usePwarProvider()
    
    // Handle cell interactions
    useEffect(() => {
        const handlePwarCellClick = async (cell: Coordinate) => {
                // TODO: Implement Pwar-specific interaction logic here
                console.log("Pwar cell clicked:", cell)
                // const wallet = pixelawCore.getWallet() as DojoWallet;
                // const account = wallet.getAccount()
                // const provider = pixelawCore.engine["dojoSetup"].provider
                // const world = setupWorld(pixelawCore.engine["dojoSetup"].provider)
                // console.log(`Loading world ${world}`)
            try {
                // return await provider.execute(
                //     account,
                //     {
                //         //contractAddress: "0x00af6854b90b294223050a2bb369e7e4ca386fe251a5f6ccbdcdc335c9e7b052",
                //         contractAddress: "0x074d62337ea2319f3e65d75cda97bc8691a3e0e6c5efc12ceb3e982c3caf62f8",
                //     entrypoint: "interact",
                //     calldata: [
                //         "0x1",
                //         "0x1",
                //         "0x1",
                //         254, 255,
                //         255
                // ]},
                // );
                // const pixel = pixelstore.getPixel(cell);
                // if (!pixel)
                //     console.error("No pixel entity!");
                await interact(cell[0], cell[1]);
            } catch (error) {
                console.error("Failed to interact with cell:", error);
            }
        }

        pixelawCore.events.on("cellClicked", handlePwarCellClick)
        return () => {
            pixelawCore.events.off("cellClicked", handlePwarCellClick)
        }
    }, [pixelawCore, interact])

    // Set up the renderer
    useEffect(() => {
        if (coreStatus !== "ready") return
        renderer.setContainer(rendererContainerRef.current!)
    }, [coreStatus, renderer])

    return (
        <div className={styles.pwarContainer}>
            <div ref={rendererContainerRef} className={styles.rendererContainer} />
            <div className={styles.pwarInterface}>
                <ProposalList/>
            </div>
        </div>
    )
}

// Wrap the PwarPage content with the PwarProvider
const PwarPage: React.FC = () => {
    return (
        <PwarProvider>
            <PwarPageContent />
        </PwarProvider>
    )
}

export default PwarPage
