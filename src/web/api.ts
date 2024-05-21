import useSWR from 'swr'

const BASE_URL = 'http://localhost:8080'

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok')
    }
    return res.json()
  })

interface WorkspacesResponse {
  workspaces: Array<{
    id: string
    title: string
  }>
}
// Custom hook to get all workspaces
export function useWorkspaces() {
  const { data, error } = useSWR<WorkspacesResponse>(`${BASE_URL}`, fetcher)

  return {
    workspaces: data?.workspaces,
    isLoading: !error && !data,
    isError: error,
  }
}

interface Shipments {
  orderNumber: string
  description: string
  id: string
  cost: number
}

interface BuildShipments {
  buildNumber: string
  id: string
  shipments: Array<Shipments>
}

interface WorkspaceResponse {
  workspace: {
    id: string
    title: string
    buildShipments: Array<BuildShipments>
  }
}
// Custom hook to get a specific workspace by ID
export function useWorkspace(id: string | undefined) {
  const { data, error } = useSWR<WorkspaceResponse>(id ? `${BASE_URL}/${id}` : null, fetcher)

  return {
    workspace: data?.workspace,
    isLoading: !error && !data,
    isError: error,
  }
}
