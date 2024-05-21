import '../style/WorkspaceList.css'
import { useWorkspaces } from '../api'
import { useNavigate } from 'react-router-dom'

/** Homepage list of all workspaces that have been created */
export default function WorkspaceListPage() {
  const navigate = useNavigate()
  const { workspaces = [] } = useWorkspaces()

  return (
    <div className="WorkspaceList">
      <h1 className="WorkspaceList__header">All workspaces</h1>
      {workspaces.map((workspace) => (
        <div
          onClick={() => navigate(`/workspace/${workspace.id}`)}
          key={workspace.id}
          className="WorkspaceList__workspaceCard"
        >
          {workspace.title}
        </div>
      ))}
    </div>
  )
}
