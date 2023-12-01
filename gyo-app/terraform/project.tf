resource "vercel_project" "gyo-app" {
  name = "gyo-app"
  framework = "nextjs"
  git_repository = {
    type = "github"
    repo = "nnakadozono/gyo"
  }
  root_directory = "gyo-app"
  environment = [{
    key   = "NEXT_PUBLIC_API_URL"
    value = "${var.next_public_api_url}"
    target  = ["production"]
  }]
}