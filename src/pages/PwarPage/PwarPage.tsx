import { usePixelawProvider } from "@pixelaw/react"
import { useEffect, useRef } from "react"
// import { Position, type Coordinate } from "@pixelaw/core"
import { Coordinate, Position, PixelStore } from "@pixelaw/core"
import styles from "./PwarPage.module.css"
import { PwarProvider, usePwarProvider } from "@/Provider/PwarProvider"
import { ProposalList } from "@/components/Pwar/Proposal/ProposalList"

// The content of the Pwar page, wrapped by PwarProvider
const PwarPageContent: React.FC = () => {
    const { pixelawCore, coreStatus } = usePixelawProvider()
    const { viewPort: renderer, pixelStore: pixelstore } = pixelawCore
    const rendererContainerRef = useRef<HTMLDivElement | null>(null)
    const { interact } = usePwarProvider()
    
    // Handle cell interactions
    useEffect(() => {
        const handlePwarCellClick = async (cell: Coordinate) => {
                console.log("Pwar cell clicked:", cell)
            try {
                await interact(cell[0], cell[1]); //pwar
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
