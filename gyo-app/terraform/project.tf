resource "vercel_project" "gyo-app" {
  name = "gyo-app"
  framework = "nextjs"
  git_repository = {
    type = "github"
    repo = "nnakadozono/gyo"
  }
  root_directory = "gyo-app"
}
