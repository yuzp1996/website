---
title: Tasks and Pipelines
linkTitle: Tasks and Pipelines
weight: 2
description: >
  Building Blocks of Tekton CI/CD Workflow
cascade:
  github_project_repo: https://github.com/tektoncd/pipeline
---
# Tekton Pipelines

Tekton Pipelines is a Kubernetes extension that installs and runs on your Kubernetes cluster.
It defines a set of Kubernetes [Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) that act as building blocks from which you can assemble CI/CD pipelines. Once installed,
Tekton Pipelines becomes available via the Kubernetes CLI (kubectl) and via API calls, just
like pods and other resources. Tekton is open-source and part of the [CD Foundation](https://cd.foundation/),
a [Linux Foundation](https://www.linuxfoundation.org/projects/) project.

## Tekton Pipelines entities

Tekton Pipelines defines the following entities:

<table>
  <tr>
    <th>Entity</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>Task</code></td>
    <td>Defines a series of steps which launch specific build or delivery tools that ingest specific inputs and produce specific outputs.</td>
  </tr>
  <tr>
    <td><code>TaskRun</code></td>
    <td>Instantiates a <code>Task</code> for execution with specific inputs, outputs, and execution parameters. Can be invoked on its own or as part of a <code>Pipeline</code>.</td>
  </tr>
  <tr>
    <td><code>Pipeline</code></td>
    <td>Defines a series of <code>Tasks</code> that accomplish a specific build or delivery goal. Can be triggered by an event or invoked from a <code>PipelineRun</code>.</td>
  </tr>
  <tr>
    <td><code>PipelineRun</code></td>
    <td>Instantiates a <code>Pipeline</code> for execution with specific inputs, outputs, and execution parameters.</td>
  </tr>
  <tr>
    <td><code>PipelineResource</code></td>
    <td>Defines locations for inputs ingested and outputs produced by the steps in <code>Tasks</code>.</td>
  </tr>
  <tr>
    <td><Code>Run</code> (alpha)</td>
    <td>Instantiates a Custom Task for execution when specific inputs.</td>
  </tr>
</table>

## Getting started

To get started, complete the [Tekton Pipelines Tutorial](https://github.com/tektoncd/pipeline/blob/master/docs/tutorial.md) and go through our
[examples](https://github.com/tektoncd/pipeline/tree/master/examples).

## Understanding Tekton Pipelines

See the following topics to learn how to use Tekton Pipelines in your project:

- [Creating a Task](/vault/Pipelines-v0.20.1/tasks/)
- [Running a standalone Task](/vault/Pipelines-v0.20.1/taskruns/)
- [Creating a Pipeline](/vault/Pipelines-v0.20.1/pipelines/)
- [Running a Pipeline](/vault/Pipelines-v0.20.1/pipelineruns/)
- [Defining Workspaces](/vault/Pipelines-v0.20.1/workspaces/)
- [Creating PipelineResources](/vault/Pipelines-v0.20.1/resources/)
- [Configuring authentication](/vault/Pipelines-v0.20.1/auth/)
- [Using labels](/vault/Pipelines-v0.20.1/labels/)
- [Viewing logs](/vault/Pipelines-v0.20.1/logs/)
- [Pipelines metrics](/vault/Pipelines-v0.20.1/metrics/)
- [Variable Substitutions](/vault/Pipelines-v0.20.1/tasks/#using-variable-substitution)
- [Running a Custom Task (alpha)](/vault/Pipelines-v0.20.1/runs/)

## Contributing to Tekton Pipelines

If you'd like to contribute to the Tekton Pipelines project, see the [Tekton Pipeline Contributor's Guide](https://github.com/tektoncd/pipeline/blob/master/CONTRIBUTING.md).

---

Except as otherwise noted, the content of this page is licensed under the
[Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/),
and code samples are licensed under the
[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).