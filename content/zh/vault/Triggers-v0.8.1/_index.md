<!-- prettier-ignore start -->
<!--
---
title: "Triggers and EventListeners"
linkTitle: "Triggers"
weight: 3
description: >
  Event Triggers
cascade:
  github_project_repo: https://github.com/tektoncd/triggers
---
-->

<!-- prettier-ignore end -->

# Tekton Triggers

Triggers enables users to map fields from an event payload into resource
templates. Put another way, this allows events to both model and instantiate
themselves as Kubernetes resources. In the case of `tektoncd/pipeline`, this
makes it easy to encapsulate configuration into `PipelineRun`s and
`PipelineResource`s.

![TriggerFlow](https://github.com/tektoncd/triggers/blob/master/images/TriggerFlow.png?raw=true)

## Learn More

See the following links for more on each of the resources involved:

- [`TriggerTemplate`](/vault/Triggers-v0.8.1/triggertemplates/)
- [`TriggerBinding`](/vault/Triggers-v0.8.1/triggerbindings/)
- [`EventListener`](/vault/Triggers-v0.8.1/eventlisteners/)
- [`ClusterTriggerBinding`](/vault/Triggers-v0.8.1/clustertriggerbindings/)

