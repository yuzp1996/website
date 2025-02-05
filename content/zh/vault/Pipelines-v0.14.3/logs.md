---
linkTitle: Logs
weight: 1100
---
# Logs

Logs for [`PipelineRuns`](/vault/Pipelines-v0.14.3/pipelineruns/) and [`TaskRuns`](/vault/Pipelines-v0.14.3/taskruns/) are
associated with the underlying pod.

To access these logs currently you have a few options:

- [You can get the logs from the pod](https://kubernetes.io/docs/reference/kubectl/cheatsheet/#interacting-with-running-pods)
  e.g. using `kubectl`:

  ```bash
  # Get the name of the pod from the instance of the TaskRun
  kubectl get taskruns -o yaml | grep podName

  # Or get the pod name from the PipelineRun
  kubectl get pipelineruns -o yaml | grep podName

  # Use kubectl to access the logs for all containers in the pod
  kubectl logs $POD_NAME --all-containers

  # Or get the logs from a specific container in the pod
  kubectl logs $POD_NAME -c $CONTAINER_NAME
  kubectl logs $POD_NAME -c step-run-kubectl
  ```

- You can use [the `tkn` cli tool](https://github.com/tektoncd/cli) to access
  logs
- You can use
  [the dashboard web interface](https://github.com/tektoncd/dashboard) to access
  logs
- You can setup an external service to consume and display logs, for example
  [Elasticsearch, Beats and Kibana](https://github.com/mgreau/tekton-pipelines-elastic-tutorials)
