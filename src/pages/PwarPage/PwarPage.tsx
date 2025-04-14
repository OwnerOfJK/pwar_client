import { usePixelawProvider } from "@pixelaw/react"
import { useEffect, useRef } from "react"
import { Coordinate} from "@pixelaw/core"
import styles from "./PwarPage.module.css"
import { ProposalList } from "@/components/Pwar/Proposal/ProposalList"
import { StatsDashboard } from "@/components/Pwar/Stats/StatsDashboard"
import { usePwarProvider } from "@/provider/PwarContext"

// The content of the Pwar page, wrapped by PwarProvider
const PwarPageContent: React.FC = () => {
    const { pixelawCore, coreStatus } = usePixelawProvider()
    const { viewPort: renderer} = pixelawCore
    const rendererContainerRef = useRef<HTMLDivElement | null>(null)
    const { account, provider } = usePwarProvider();

    console.log(`Provider ${provider} and Account ${account}`)
    
    // Handle cell interactions
    useEffect(() => {
        const handlePwarCellClick = async (cell: Coordinate) => {
                console.log("Pwar cell clicked:", cell)
                try {
                    provider.execute(account,
                        {
                            contractAddress: "0x02f3dad854016a24174a0cfdd3f5c72c1ef5b0320d28eba044e73467c53f385a", // p_war-p_war_actions
                            entrypoint: "interact",
                            calldata: [
                                "0x1",
                                "0x1",
                                "0x1",
                                cell[0],
                                cell[1],
                                255
                            ]
                        }
                    )
                } catch (error) {
                    console.error("Failed to interact with cell:", error);
                }
        }

        pixelawCore.events.on("cellClicked", handlePwarCellClick)
        return () => {
            pixelawCore.events.off("cellClicked", handlePwarCellClick)
        }
    }, [pixelawCore])

    // Set up the renderer
    useEffect(() => {
        if (coreStatus !== "ready") return
        renderer.setContainer(rendererContainerRef.current!)
    }, [coreStatus, renderer])

    return (
        <div className={styles.pwarContainer}>
            <div ref={rendererContainerRef} className={styles.rendererContainer} />
            <div className={styles.pwarInterface}>
                <StatsDashboard/>
            </div>
        </div>
    )
}

// Wrap the PwarPage content with the PwarProvider
const PwarPage: React.FC = () => {
    return (
        <PwarPageContent />
    );
}

export default PwarPage
