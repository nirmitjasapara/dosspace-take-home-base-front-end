import '../style/WorkspaceList.css'
import { useWorkspace } from '../api'
import { useParams } from 'react-router-dom'

/** Homepage list of all workspaces that have been created */
export default function WorkspacePage() {
  const { id } = useParams()
  const { workspace } = useWorkspace(id)

  return (
    <div className="WorkspaceList">
      <h1 className="WorkspaceList__header">{workspace?.title ?? 'Error'}</h1>
      {workspace?.buildShipments?.map((buildShipment) => (
        <div key={buildShipment.id} className="WorkspaceList__workspaceCard">
          {buildShipment.buildNumber}
        </div>
      ))}
    </div>
  )
}
