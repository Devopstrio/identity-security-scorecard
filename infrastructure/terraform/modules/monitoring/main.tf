resource "grafana_dashboard" "executive_scorecard" {
  config_json = jsonencode({
    title = "Identity Security Scorecard"
    panels = [
      {
        title = "Overall Risk Score"
        type  = "gauge"
        targets = [{ expr = "identity_global_score" }]
      },
      {
        title = "Sync Failures"
        type  = "timeseries"
        targets = [{ expr = "rate(identity_sync_failures_total[5m])" }]
      }
    ]
  })
}
