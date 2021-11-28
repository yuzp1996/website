
<!--
---
linkTitle: "Deprecations"
weight: 5000
---
-->

# Deprecations

- [Introduction](#introduction)
- [Deprecation Table](#deprecation-table)

## Introduction

This doc provides a list of features in Tekton Pipelines that are
being deprecated.

## Deprecation Table

| Feature Being Deprecated                                                                                                                      | Deprecation Announcement                                                     | [API Compatibility Policy](https://github.com/tektoncd/pipeline/tree/master/api_compatibility_policy.md) | Earliest Date or Release of Removal |
| ------------------------                                                                                                                      | ------------------------                                                     | -------------------------------------------------------------------------------------------------------- | ------------------------            |
| [`tekton.dev/task` label on ClusterTasks](https://github.com/tektoncd/pipeline/issues/2533)                                                   | [v0.12.0](https://github.com/tektoncd/pipeline/releases/tag/v0.12.0)         | Beta                                                                                                     | January 30 2021                     |
| [Step `$HOME` env var defaults to `/tekton/home`](https://github.com/tektoncd/pipeline/issues/2013)                                           | [v0.11.0-rc1](https://github.com/tektoncd/pipeline/releases/tag/v0.11.0-rc1) | Beta                                                                                                     | December 4 2020                     |
| [Step `workingDir` defaults to `/workspace`](https://github.com/tektoncd/pipeline/issues/1836)                                                | [v0.11.0-rc1](https://github.com/tektoncd/pipeline/releases/tag/v0.11.0-rc1) | Beta                                                                                                     | December 4 2020                     |
| [The `TaskRun.Status.ResourceResults.ResourceRef` field is deprecated and will be removed.](https://github.com/tektoncd/pipeline/issues/2694) | [v0.14.0](https://github.com/tektoncd/pipeline/releases/tag/v0.14.0)         | Beta                                                                                                     | April 30 2021                       |
| [The `PipelineRun.Spec.ServiceAccountNames` field is deprecated and will be removed.](https://github.com/tektoncd/pipeline/issues/2614)       | [v0.15.0](https://github.com/tektoncd/pipeline/releases/tag/v0.15.0)         | Beta                                                                                                     | May 15 2021                         |
| [`Conditions` CRD is deprecated and will be removed. Use `WhenExpressions` instead.](https://github.com/tektoncd/community/blob/main/teps/0007-conditions-beta.md)       | [v0.16.0](https://github.com/tektoncd/pipeline/releases/tag/v0.16.0)         | Alpha                                                                                                     | Nov 02 2020                         |
| [The PascalCase fields in WhenExpressions is deprecated and will be removed](https://github.com/tektoncd/pipeline/pull/3389)                  | [v0.17.2](https://github.com/tektoncd/pipeline/releases/tag/v0.17.2)         | Alpha                                                                                                    | Jan 07 2021                         |