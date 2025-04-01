# -*- encoding: utf-8 -*-
# stub: hash-joiner 0.0.7 ruby lib

Gem::Specification.new do |s|
  s.name = "hash-joiner".freeze
  s.version = "0.0.7".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Mike Bland".freeze]
  s.date = "2015-02-19"
  s.description = "Performs pruning or one-level promotion of Hash attributes (typically labeled \"private:\"), and deep merges and joins of Hash objects. Works on Array objects containing Hash objects as well.".freeze
  s.email = "michael.bland@gsa.gov".freeze
  s.executables = ["filter-yaml-files".freeze, "consolidate-yaml-files".freeze]
  s.files = ["bin/consolidate-yaml-files".freeze, "bin/filter-yaml-files".freeze]
  s.homepage = "https://github.com/18F/hash-joiner".freeze
  s.licenses = ["CC0".freeze]
  s.rubygems_version = "2.2.2".freeze
  s.summary = "Module for pruning, promoting, deep-merging, and joining Hash data".freeze

  s.installed_by_version = "3.5.22".freeze

  s.specification_version = 4

  s.add_runtime_dependency(%q<safe_yaml>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<bundler>.freeze, ["~> 1.7".freeze])
  s.add_development_dependency(%q<rake>.freeze, ["~> 10.0".freeze])
  s.add_development_dependency(%q<minitest>.freeze, [">= 0".freeze])
  s.add_development_dependency(%q<codeclimate-test-reporter>.freeze, [">= 0".freeze])
end
