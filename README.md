<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="150" alt="Identity Security Scorecard Logo" />

<h1>Identity Security Scorecard Platform</h1>

<p><strong>The Institutional-Grade Quantitative Measurement Platform for Identity Risk, Maturity, and Zero-Trust Readiness</strong></p>

[![Standard: NIST--CSF](https://img.shields.io/badge/Standard-NIST--CSF-blue.svg?style=for-the-badge&labelColor=000000)]()
[![Status: Production--Ready](https://img.shields.io/badge/Status-Production--Ready-indigo.svg?style=for-the-badge&labelColor=000000)]()
[![Security: Risk--Quant](https://img.shields.io/badge/Security-Risk--Quant-rose.svg?style=for-the-badge&labelColor=000000)]()
[![Platform: Multi--Cloud](https://img.shields.io/badge/Platform-Multi--Cloud-0078d4?style=for-the-badge&labelColor=000000)]()
[![Metrics: Executive--Ready](https://img.shields.io/badge/Metrics-Executive--Ready-ff69b4?style=for-the-badge&labelColor=000000)]()

<br/>

> **"You cannot manage what you cannot measure."** 
> Identity Security Scorecard is a flagship platform designed to provide measurable visibility into the security posture of an organization's identity estate. It transforms complex telemetry from directories, IDPs, and cloud platforms into actionable risk scores and maturity roadmaps.

</div>

---

## 🏛️ Executive Summary

The **Identity Security Scorecard Platform** is a premium metrics solution designed for CIOs, CISOs, and IAM Governance Leaders. In the modern enterprise, identity is the most critical security boundary, yet it is often the least measurable. Traditional security dashboards focus on vulnerabilities and patches, often ignoring the "Identity Gaps" like over-privileged accounts, missing MFA, or dormant service principals.

This platform provides a **Unified Risk Scoring Engine**. It demonstrates how to aggregate telemetry from **Active Directory**, **Entra ID**, **Okta**, and **Cloud IAM** to calculate real-time security scores. By integrating **FastAPI**, **React 18**, and **Advanced Analytics Workers**, it enables organizations to benchmark business units, track remediation progress, and generate board-ready reports that communicate cyber risk in financial and strategic terms.

---

## 🚀 Business Outcomes & Drivers

### 🎯 Key Business Outcomes
- **Quantitative Risk Reduction**: Measure and reduce the "Identity Attack Surface" through data-driven remediation.
- **Strategic Investment Alignment**: Identify precisely where security spend is needed (e.g., "BU Alpha needs MFA acceleration").
- **Audit Efficiency**: Automated evidence collection for compliance frameworks like SOC2, HIPAA, and ISO 27001.
- **Zero Trust Acceleration**: Track the transition from legacy perimeter security to identity-centric Zero Trust maturity.

### 🔑 Strategic Drivers
- **Cyber Insurance Requirements**: Demonstrating "Authentication Strength" and "Privileged Control" to lower premiums.
- **M&A Due Diligence**: Rapidly assessing the security posture of acquired identity environments.
- **Board Accountability**: Moving from anecdotal security reports to evidence-based metrics for the Board of Directors.

---

## 📐 Architecture Storytelling: 30+ Advanced Diagrams

### 1. Executive Scoring Architecture
The high-level orchestration of telemetry into executive metrics.

```mermaid
graph TD
    subgraph "Scorecard Platform"
        Portal[Executive Dashboard]
        Engine[Weighted Scoring Engine]
        Analytics[Trend Analytics]
        DB[(Metrics Ledger)]
    end

    subgraph "Telemetry Sources"
        AD[Active Directory]
        IDP[Entra / Okta]
        Cloud[AWS / Azure IAM]
    end

    AD --> Engine
    IDP --> Engine
    Cloud --> Engine
    Engine --> DB
    Analytics --> DB
    Portal --> Analytics
```

### 2. Hybrid Identity Telemetry Topology
Mapping telemetry from on-prem to multi-cloud scorecards.

```mermaid
graph LR
    subgraph "On-Premises"
        AD[Domain Controllers]
    end
    subgraph "Telemetry Bridge"
        Agent[Log Collector]
    end
    subgraph "Cloud Scorecard"
        HUB[Identity Hub]
    end
    AD --> Agent
    Agent --> HUB
    HUB --> SaaS[SaaS Risk Ingest]
```

### 3. Weighted Risk Scoring Model
How different metrics contribute to the final security score.

```mermaid
graph TD
    MFA[MFA Coverage: 40%] --> Score[Total Score]
    PAM[PAM Exposure: 30%] --> Score
    JML[JML Maturity: 20%] --> Score
    Mach[Machine Hygiene: 10%] --> Score
```

### 4. Zero Trust Maturity Roadmap
The journey from "Legacy" to "Optimized" Zero Trust.

```mermaid
graph LR
    L1[Initial: Basic Passwords] --> L2[Repeatable: MFA On]
    L2 --> L3[Defined: RBAC/ABAC]
    L3 --> L4[Managed: Risk-Based]
    L4 --> L5[Optimized: Continuous]
```

### 5. Benchmark Comparison Model
Comparing security posture across global business units.

```mermaid
graph TD
    Global[Global Baseline]
    BU1[Finance: 82%]
    BU2[R&D: 64%]
    BU3[Sales: 45%]
    
    Global --> BU1
    Global --> BU2
    Global --> BU3
```

### 6. Remediation Tracking Workflow
Closing the loop between risk detection and resolution.

```mermaid
sequenceDiagram
    participant Engine
    participant Risk
    participant Jira
    participant Team

    Engine->>Risk: Detect MFA Gap
    Risk->>Jira: Create Ticket
    Jira->>Team: Assign Remediation
    Team->>Engine: Fix Verified
    Engine->>Risk: Resolve Incident
```

### 7. Dormant Account Lifecycle Risk
Visualizing the risk of "Identity Ghosts."

```mermaid
graph LR
    Active[Active Account] --> Inactive[90 Days Idle]
    Inactive --> Risk[High Risk Target]
    Risk --> Alert[Score Deduction]
    Alert --> Cleanup[Auto-Disable]
```

### 8. Privileged Access Sprawl Model
Measuring the expansion of administrative permissions.

```mermaid
graph TD
    Admin[Admin Users] --> Count[Count Check]
    Count -->|Count > 5%| Red[Critical Warning]
    Count -->|Count < 2%| Green[Optimal Hygiene]
```

### 9. Machine Identity Expiry Risk
Predicting outages caused by expired non-human credentials.

```mermaid
graph TD
    SP[Service Principal] --> Expiry[Check Expiry Date]
    Expiry -- "< 30 Days" --> Warn[Yellow Alert]
    Expiry -- "< 7 Days" --> Crit[Red Alert]
```

### 10. Board Reporting Cycle
The process of strategic communication.

```mermaid
graph LR
    Data[Daily Scoring] --> Agg[Monthly Aggregate]
    Agg --> Narr[Narrative Generation]
    Narr --> Deck[Board Deck Export]
```

### 11. Workforce Risk Scoring Lifecycle
```mermaid
graph TD
    Hire[Joiner] --> Base[Base Score]
    Base --> Change[Mover: Role Change]
    Change --> Risk[Conflict Detection]
    Risk --> Final[Current Score]
```

### 12. MFA Decision Posture Flow
```mermaid
graph TD
    Auth[Auth Attempt] --> Pol{Policy Applied?}
    Pol -- No --> Deduction[Score -5]
    Pol -- Yes --> Strength{Strong MFA?}
    Strength -- No --> Deduction2[Score -2]
```

### 13. Maturity Heatmap Logic
```mermaid
graph LR
    Dim[Dimension] --> Score[0-100]
    Score -->|0-40| Red[Critical Gap]
    Score -->|41-70| Amb[Medium Maturity]
    Score -->|71-100| Grn[High Maturity]
```

### 14. Identity Sync Worker Architecture
```mermaid
graph LR
    Worker[Sync Worker] --> AD[AD Provider]
    Worker --> Okta[Okta Provider]
    Worker --> SQL[(Metrics Store)]
```

### 15. API Architecture Model
```mermaid
graph TD
    Client[React App] --> API[FastAPI Gateway]
    API --> Auth[OIDC/JWT]
    API --> Cache[Redis Cache]
    API --> DB[(PostgreSQL)]
```

### 16. OIDC Authentication Flow
```mermaid
sequenceDiagram
    User->>Portal: Login
    Portal->>IDP: Redirect
    IDP-->>Portal: Auth Code
    Portal->>IDP: Token Swap
    IDP-->>Portal: ID/Access Token
```

### 17. Segregation of Duties (SoD) Score
```mermaid
graph LR
    RoleA[Approve Pay] + RoleB[Create Pay] --> Toxic[Toxic Combo]
    Toxic --> Impact[Impact: Critical Score]
```

### 18. Conditional Access Effectiveness
```mermaid
graph TD
    Policy[CA Policy] --> Hits[Traffic Match]
    Hits --> Bypass[Detected Bypasses]
    Bypass --> Penalty[Score Deduction]
```

### 19. SaaS Entitlement Sprawl
```mermaid
graph LR
    App[SaaS: Salesforce] --> Ent[Entitlements]
    Ent --> Unused[90% Unused]
    Unused --> Waste[Efficiency Score -10]
```

### 20. Directory Hygiene Index
```mermaid
graph TD
    D[Directory] --> Obj[Objects]
    Obj --> Incomplete[Missing Attributes]
    Obj --> Dup[Duplicate IDs]
    Obj --> Score[Hygiene Index]
```

### 21. Cloud IAM Multi-Region Risk
```mermaid
graph TD
    AWS[AWS IAM] --> Reg1[Region US]
    AWS --> Reg2[Region EU]
    Reg1 + Reg2 --> Global[Global IAM Score]
```

### 22. ServiceNow Integration Flow
```mermaid
graph LR
    Score[Low Score] --> Trigger[Automation Trigger]
    Trigger --> SNOW[ServiceNow Incident]
```

### 23. Historical Trend Regression
```mermaid
graph LR
    P[Past Scores] --> ML[Regression Model]
    ML --> F[Forecast Score]
```

### 24. Audit Evidence Export Pipeline
```mermaid
graph TD
    Audit[Auditor Request] --> Filter[Select Evidence]
    Filter --> Export[Generate Signed PDF]
```

### 25. Risk Heatmap Matrix
```mermaid
graph TD
    Likelihood[High/Low] --> Impact[High/Low]
    Impact --> Matrix[4x4 Matrix]
```

### 26. PowerBI Data Model
```mermaid
graph LR
    SQL[PostgreSQL] --> ETL[Extract/Transform]
    ETL --> PBI[PowerBI Dataset]
```

### 27. Machine ID Certificate Flow
```mermaid
graph TD
    C[Cert] --> I[Issue]
    I --> V[Verify]
    V --> E[Expiry Monitor]
```

### 28. Identity Analytics UEBA
```mermaid
graph LR
    Logs[Log Stream] --> UEBA[Behavior Model]
    UEBA --> Score[Risk Score Delta]
```

### 29. Regional DR Topology
```mermaid
graph LR
    P[Primary US] <->|Replication| S[Secondary EU]
```

### 30. Strategic Roadmap Cycle
```mermaid
graph TD
    Score[Current Score] --> Plan[Remediation Plan]
    Plan --> Exec[Execute]
    Exec --> Rescore[New Score]
```

---

## 🛠️ Technical Stack & Deployment

### Local Development
To simulate the scorecard engine locally:
```bash
# Clone the repository
git clone https://github.com/devopstrio/identity-security-scorecard.git
cd identity-security-scorecard

# Setup environment
cp .env.example .env

# Start platform services
make up
```
Access the Metrics Portal at `http://localhost:3000`.

---

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.
