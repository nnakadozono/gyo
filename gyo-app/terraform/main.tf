terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.1"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_api_token
}

resource "vercel_project" "gyo-app" {
  name = "gyo-app"
  framework = "nextjs"
  git_repository = {
    type = "github"
    repo = "${var.github_repo}"
  }
  root_directory = "gyo-app"
  environment = [{
    key   = "NEXT_PUBLIC_API_URL"
    value = "${var.next_public_api_url}"
    target  = ["production"]
  }]
}
