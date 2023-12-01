resource "vercel_project" "gyo-app" {
  name = "gyo-app"
  framework = "nextjs"
  git_repository = {
    type = "github"
    repo = "nnakadozono/gyo"
  }
}

data "vercel_project_directory" "gyo-app" {
  path = "../"
}

resource "vercel_deployment" "gyo-app" {
  project_id  = vercel_project.gyo-app.id
  files       = data.vercel_project_directory.gyo-app.files
  path_prefix = "../"
  production  = true
}
