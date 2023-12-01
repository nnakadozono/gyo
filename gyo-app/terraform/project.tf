resource "vercel_project" "gyo-app" {
  name = "gyo-app"
  git_repository = {
    type = "github"
    repo = "nnakadozono/gyo"
  }
}