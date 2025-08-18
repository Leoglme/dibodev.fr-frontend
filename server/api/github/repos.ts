import { GithubService } from '../../services/githubService'

export default defineEventHandler(async (event) => {
  return await GithubService.getAllReposCounts(event)
})
