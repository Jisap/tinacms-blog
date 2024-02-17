

import { ProjectListPageComponent } from '@/components/app/projects/project-list-page';
import client from '@/tina/__generated__/client'

export default async function ProjectListPage() {

  const result = await client.queries.projectConnection(); // Petición a components/projects sobre todos los post que existan

  return <ProjectListPageComponent {...result} /> // muestra esos projects

}