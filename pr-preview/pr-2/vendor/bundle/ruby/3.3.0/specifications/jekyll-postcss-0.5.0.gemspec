# -*- encoding: utf-8 -*-
# stub: jekyll-postcss 0.5.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-postcss".freeze
  s.version = "0.5.0".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "homepage_uri" => "https://github.com/mhanberg/jekyll-postcss", "source_code_uri" => "https://github.com/mhanberg/jekyll-postcss" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Mitchell Hanberg".freeze]
  s.bindir = "exe".freeze
  s.date = "2021-09-11"
  s.description = "A PostCSS plugin for Jekyll.".freeze
  s.email = ["mitch@mitchellhanberg.com".freeze]
  s.homepage = "https://github.com/mhanberg/jekyll-postcss".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.4".freeze
  s.summary = "A PostCSS plugin for Jekyll.".freeze

  s.installed_by_version = "3.5.22".freeze

  s.specification_version = 4

  s.add_development_dependency(%q<bundler>.freeze, ["~> 1.17".freeze])
  s.add_development_dependency(%q<jekyll>.freeze, [">= 2.0".freeze])
  s.add_development_dependency(%q<rake>.freeze, [">= 12.3.3".freeze])
  s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0".freeze])
  s.add_development_dependency(%q<rubocop-jekyll>.freeze, ["~> 0.5.1".freeze])
end
