---
linkTitle: Installation
weight: 2
---
# Installing Tekton Triggers

Use this page to add the component to an existing Kubernetes cluster.

- [Pre-requisites](#pre-requisites)
- [Versions](#versions)
- [Installing Tekton Triggers](#installing-tekton-triggers-1)

## Pre-requisites

1.  A Kubernetes cluster version 1.15 or later

    If you don't already have a cluster, you can create one for testing with
    `kind`.  [Install
    `kind`](https://kind.sigs.k8s.io/docs/user/quick-start/#installation) and
    create a cluster by running [`kind create
    cluster`](https://kind.sigs.k8s.io/docs/user/quick-start/#creating-a-cluster).
    This will create a cluster running locally, with RBAC enabled.

1.  Grant current user `cluster-admin` privileges.

    _See
    [Role-based access control](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control#prerequisites_for_using_role-based_access_control)
    for more information._

1.  Install Tekton Pipelines. You can install the latest version using the
    command below or follow the
    [pipeline installation guide](https://github.com/tektoncd/pipeline/blob/master/docs/install.md):

    ```bash
    kubectl apply --filename https://storage.googleapis.com/tekton-releases/pipeline/latest/release.yaml
    ```


## Versions

The versions of Tekton Triggers available are:

- [Officially released versions](https://github.com/tektoncd/triggers/releases),
  e.g. `v0.1.0`
- `HEAD` - To install the most recent, unreleased code in the repo see
  [the development guide](https://github.com/tektoncd/triggers/blob/master/DEVELOPMENT.md#install-triggers)

## Installing Tekton Triggers

To add the Tekton Triggers component to an existing cluster:

1.  Run the
    [`kubectl apply`](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#apply)
    command to install [Tekton Triggers](https://github.com/tektoncd/triggers)
    and its dependencies:

    ```bash
    kubectl apply --filename https://storage.googleapis.com/tekton-releases/triggers/latest/release.yaml
    ```

    _Previous versions will be available at `previous/$VERSION_NUMBER`, e.g.
    https://storage.googleapis.com/tekton-releases/triggers/previous/v0.1.0/release.yaml_

1.  Run the
    [`kubectl get`](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#get)
    command to monitor the Tekton Triggers components until all of the components
    show a `STATUS` of `Running`:

    ```bash
    kubectl get pods --namespace tekton-pipelines
    ```

    Tip: Instead of running the `kubectl get` command multiple times, you can
    append the `--watch` flag to view the component's status updates in real
    time. Use CTRL + C to exit watch mode.

You are now ready to create and run Tekton Triggers:

- See [Tekton Triggers Getting Started Guide](https://github.com/tektoncd/triggers/tree/v0.8.1/docs/getting-started) to
  get started.
- Look at the
  [examples](https://github.com/tektoncd/triggers/tree/master/examples)
