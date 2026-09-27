# Workstation Decision Checkpoint — 2026-09-27

## Purpose

This is the current decision save point for the personal workstation purchase for Project Babai. It records the decisions and reasoning established during the September 2026 purchase discussion so future conversations do not revert to earlier assumptions.

## Architectural boundary

- Babai production is **not hosted on this workstation**.
- Public production applications, production databases, authentication, public APIs, traffic handling, backups, and production AI should remain in cloud-managed infrastructure.
- The workstation is a **development and test machine**.
- Local AI is an optional capability for experimentation, model testing, private data, embeddings/RAG, coding-assistant experiments, and future research.
- Future production traffic growth and conversational-AI demand should primarily drive cloud architecture, not automatically increase the local workstation specification.

## Standing principle

> **Appropriately provisioned + upgradeable, not future-proof at any cost.**

Buy what today's workload justifies while preserving a sensible path to upgrade when actual workload evidence appears.

This principle applies to RAM, GPU, storage, and the overall platform.

---

## Phase 1 purchase — current target

The default purchase path is a high-end but expandable AM5 desktop workstation.

### Core configuration

- **CPU:** AMD Ryzen 9 9950X3D
- **Motherboard:** quality X870E preferred; quality X870 acceptable if its PCIe topology, M.2 layout, memory support, and expansion behavior meet requirements
- **GPU:** NVIDIA RTX 5070 Ti 16GB
- **Storage:** 2TB TLC NVMe + 4TB TLC NVMe
- **PSU:** 1000W ATX 3.1, 80+ Gold or better, native 12V-2x6
- **Cooling:** quality high-end air cooler or reliable 280/360mm AIO
- **Case:** high-airflow ATX case with substantial future GPU clearance
- **Fans:** additional quality PWM fans as required
- **GPU support:** support bracket
- **UPS:** pure-sine-wave UPS, target roughly 1500–2200VA / approximately ₹15–20k class depending on final load and model
- **Monitor:** do not buy; reuse existing LG 29WP60G
- **Sound card:** do not buy
- **Windows:** quote separately; do not automatically include it
- **Assembly/testing:** included from vendor

### Phase 1 workload

- SaaS/backend/frontend development
- Docker and local development services
- PostgreSQL, Redis/RabbitMQ and similar local dependencies
- VMs where useful
- VS Code/IDE + GitHub Copilot
- Codex/Claude CLI and other development agents
- Builds and tests
- Unity/Godot/Unreal/Blender work
- Occasional gaming
- Local AI experimentation/testing
- Private data and staging workloads

---

## RAM policy — settled

Do **not** make 128GB mandatory if vendors are pricing it irrationally.

### Priority

1. **2×64GB matched QVL-compatible kit** if 128GB is reasonably priced.
2. **2×32GB matched QVL-compatible kit (64GB total)** if 128GB is disproportionately expensive.
3. **Never intentionally buy 1×64GB** for Phase 1.
4. **Do not make 4-DIMM/4×32GB the default architecture.**
5. If Phase 1 starts at 2×32GB and January 2027 workload evidence shows that 128GB is required:
   - first price a proper 2×64GB replacement kit;
   - if 2×64GB remains disproportionately expensive, adding a matched 2×32GB kit to reach 128GB can be considered as a **last-resort fallback**, with the known four-DIMM speed/stability tradeoff accepted only if the motherboard/QVL supports it.

### Rationale

AMD's Ryzen 9 9950X3D official memory specifications favor two-DIMM configurations for rated memory speeds; four-DIMM operation has substantially lower official memory-speed support. Therefore, 2×64GB is technically cleaner than 4×32GB for a 128GB target.

The financial discipline is equally important: do not pre-buy expensive capacity against a hypothetical January requirement.

### January checkpoint

Around January 2027, evaluate actual workstation memory pressure from the POC and development workload:

- If 64GB is sufficient: do nothing.
- If real usage approaches/exceeds the practical 64GB ceiling: upgrade.
- If workload becomes genuinely heavy: consider 128GB, 192GB, or 256GB based on measured need.

Babai's production traffic growth does **not** by itself justify more local RAM.

---

## GPU policy

Phase 1 uses **RTX 5070 Ti 16GB**.

Do not buy an RTX 5090 or second GPU today solely for hypothetical future AI.

The intended upgrade model is:

- buy adequate GPU capability now;
- preserve motherboard/case/PSU/PCIe expansion headroom;
- replace or add accelerator hardware later if local AI becomes a real requirement.

VRAM is physically attached to the GPU and cannot be added to an existing GPU. Future VRAM capacity therefore comes through GPU replacement or, if the final platform supports it, additional accelerators.

The motherboard must be evaluated for actual PCIe electrical topology, not just the existence of a second physical slot.

---

## Motherboard verification — mandatory before purchase

Before paying a vendor, obtain the exact motherboard model and verify:

- CPU PCIe lane allocation
- second-GPU/accelerator electrical configuration
- x16/x8/x8 or equivalent behavior where applicable
- chipset versus CPU-connected slots
- M.2 lane sharing
- which M.2 slots or PCIe slots are disabled/reduced when additional devices are installed
- number of usable M.2 slots
- 2.5GbE or better
- BIOS Flashback
- diagnostic LEDs
- QVL support for the selected RAM
- physical GPU clearance and slot spacing

This is the most important technical check for future expansion.

---

## Storage policy

Phase 1:

- 2TB TLC NVMe for OS/applications
- 4TB TLC NVMe for projects, Docker/VM data, databases, models and general active data

Avoid paying premium prices merely for branding when an equivalent TLC drive meets the workload.

RAID is not a backup.

Maintain external/off-site backup separately.

---

## Vendor quote process

Do not disclose the ₹3.5L overall budget to vendors initially.

Send every serious vendor the same specification and require exact model numbers.

### RAM quotes must be side-by-side

Ask every vendor to quote:

- **64GB = 2×32GB matched QVL kit**
- **128GB = 2×64GB matched QVL kit**

using the same platform and showing the RAM price difference directly.

Do not allow the vendor to substitute:

- 1×64GB
- 4×32GB
- mixed kits

unless explicitly requested later.

### Required exact quote details

For every component:

- manufacturer
- exact model number
- individual price where available
- GST
- final GST-inclusive total
- warranty
- availability
- assembly/testing
- alternatives and reason for any substitution

For the motherboard, require the PCIe/M.2 topology details described above.

---

## Current vendor/market context

Quotes received so far have shown major pricing variation, especially for 128GB RAM.

Known quote examples:

- **Shweta:** 9950X3D + Gigabyte X870 + 128GB + 5070 Ti etc. was approximately ₹5.83L, with major concerns around RAM/storage/GPU pricing and unspecified models.
- **Kuro:** revised quote with 9950X3D, Gigabyte X870E Aorus Elite X3D WiFi7, 128GB 2×64, 5070 Ti, 2TB + 4TB and 1000W PSU was approximately ₹7.01L; exact model details and PCIe topology still require verification.
- **MVP:** quote approximately ₹6.78L for 9950X3D, ASUS ProArt X870E Creator, Corsair 128GB 2×64, PNY 5070 Ti, Noctua NH-D15, Samsung 990 Pro 2TB + 990 EVO Plus 4TB, DeepCool PN1000M 1000W and Lian Li case, including warranty/service bundle.
- **KS:** handwritten quote had approximately ₹5.09L in identifiable components, including 9950X3D, Gigabyte X870, 128GB as two 64GB sticks, 2TB + 4TB, 1000W PSU and 5070 Ti. Exact models and warranty still need verification.

These vendor prices are not accepted as the market floor or as proof that the Phase 1 architecture is too expensive. The goal is to normalize exact component models and find the best legitimate configuration.

---

## Mac Studio / Mac mini evaluation

A contact suggested an Apple Mac Studio M5 Ultra around ₹6.5L, approximately 96GB unified memory and 1TB SSD.

Apple's current September 2026 lineup also includes Mac mini M5 Pro and Mac Studio M5 Max/M5 Ultra.

The Mac options were evaluated because they offer strong CPU performance, unified memory, power efficiency, compactness and potentially attractive local-AI experimentation.

However, they are **alternative architectures**, not automatic replacements for the Phase 1 PC.

### Comparison categories

The decision matrix used these weights:

- SaaS development: 20%
- Docker/databases/VMs/multitasking: 15%
- Local AI experimentation: 10%
- AI/GPU ecosystem: 10%
- Future upgradeability: 15%
- x86/Linux/Windows compatibility: 10%
- Game development/3D: 8%
- Occasional gaming: 5%
- Storage/expansion: 4%
- Power/noise/physical convenience: 3%

Production hosting was explicitly assigned **0% weight**.

Indicative weighted assessment from the discussion:

- Mac mini M5 Pro: ~6.8/10
- Mac Studio M5 Max: ~7.9/10
- Mac Studio M5 Ultra: ~8.0/10
- Phase 1 PC: ~9.1/10
- Phase 2 PC: ~9.8/10

These are decision-framework scores, not benchmark measurements.

### Interpretation

- **Mac mini M5 Pro:** interesting as a compact/secondary developer machine, but not the default main workstation.
- **Mac Studio M5 Max:** legitimate premium macOS development workstation alternative.
- **Mac Studio M5 Ultra:** technically exceptional, especially for unified-memory/local-AI workloads, but its roughly ₹6.3L+ starting price puts it in a different budget category and its GPU/SoC is not field-upgradable.
- **Phase 1 PC:** directly matches the current development workload while preserving Windows/Linux, CUDA/NVIDIA, gaming, PCIe and GPU-upgrade options.
- **Phase 2 PC:** only becomes relevant when actual local-AI or compute requirements justify the upgrade.

The Mac decision should therefore be driven by a **specific workflow requirement**, not by CPU-core count or impressive specifications alone.

---

## Decision order

1. **Lock architecture:** Phase 1 PC is the default path.
2. Obtain exact M5 Max/M5 Ultra proposal if the Mac alternative is still being considered.
3. Obtain normalized PC quotes from multiple vendors using exactly the same specification.
4. Reject bad configurations before comparing headline prices.
5. Verify exact motherboard PCIe/M.2 topology.
6. Calculate true Phase 1 total including UPS, GST and necessary accessories.
7. Compare the exact Apple alternatives against the Phase 1 PC.
8. If Phase 1 satisfies today's workload and fits the target, purchase it.
9. Do not buy Phase 2 hardware today.
10. Reassess actual local compute/RAM/VRAM needs around January 2027 or when the workload materially changes.

---

## Phase 1 versus Phase 2

### Phase 1 — now

9950X3D + X870/X870E + 64GB or 128GB RAM + RTX 5070 Ti + 2TB + 4TB + 1000W PSU + quality cooling/case + pure-sine UPS.

### Phase 2 — later, only if justified

Potentially:

- higher-capacity system RAM
- higher-VRAM GPU
- second accelerator if motherboard/PSU/case topology supports it
- additional storage
- other platform changes only where measured workloads justify them

Do not purchase Phase 2 hardware today merely because future local AI is possible.

---

## Current purchasing stance

**Do not pay a vendor yet.**

The next action is the controlled vendor quote round.

The target is approximately **₹3.5L all-in including UPS**, but this remains an internal purchasing ceiling/target and should not be disclosed to vendors during initial quotation.

The final configuration is selected from exact component pricing and compatibility, not from a vendor's bundled headline number.
