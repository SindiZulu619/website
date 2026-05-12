import React, { useEffect, useState } from "react";
import "./index.css";

export default function InspectionForm() {
  const [assetId, setAssetId] = useState("Pending Scan...");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const asset = params.get("asset");

    if (asset) {
      setAssetId(asset);
    }
  }, []);

  return (
    <div className="page">
      <div className="report">

        {/* HEADER */}
        <div className="header">
          <h1>SANS 1475 COMPLIANCE CHECKLIST</h1>
          <p>Fire Equipment Inspection & Maintenance Log</p>
        </div>

        {/* TOP INFO */}
        <div className="info-grid">
          <div className="info-box">
            <label>NFC ASSET UID</label>
            <p>{assetId}</p>
          </div>

          <div className="info-box">
            <label>INSPECTION DATE</label>
            <p>2026-05-11</p>
          </div>

          <div className="info-box">
            <label>TECHNICIAN SAQCC NO.</label>
            <p>__________________</p>
          </div>

          <div className="info-box">
            <label>SITE / ZONE</label>
            <p>__________________</p>
          </div>
        </div>

        {/* SECTION 1 */}
        <div className="section">
          <h2>1. Portable Fire Extinguisher (SANS 1475-1)</h2>

          <table>
            <thead>
              <tr>
                <th>Inspection Point</th>
                <th>Requirement / Criteria</th>
                <th>Pass / Fail</th>
              </tr>
            </thead>

            <tbody>
              <InspectionRow
                title="Gross Mass"
                description="Weigh unit. Mass loss < 5% of stamped gross weight."
              />

              <InspectionRow
                title="Pressure Gauge"
                description="Needle must be in the Green operating zone."
              />

              <InspectionRow
                title="Safety Seal/Pin"
                description="Tamper seal intact; pin not bent or obstructed."
              />

              <InspectionRow
                title="Cylinder Condition"
                description="No deep corrosion, dents, or paint damage."
              />

              <InspectionRow
                title="Hose & Nozzle"
                description="No cracks/perishing; path clear of obstructions."
              />

              <InspectionRow
                title="Regulatory Label"
                description="SANS 1186 signs visible and legible."
              />
            </tbody>
          </table>
        </div>

        {/* SECTION 2 */}
        <div className="section">
          <h2>2. Fire Hose Reel (SANS 1475-2)</h2>

          <table>
            <thead>
              <tr>
                <th>Inspection Point</th>
                <th>Requirement / Criteria</th>
                <th>Pass / Fail</th>
              </tr>
            </thead>

            <tbody>
              <InspectionRow
                title="Drum Rotation"
                description="Rotates freely 360° without binding."
              />

              <InspectionRow
                title="Hose Condition"
                description="Checked for leaks or surface degradation."
              />

              <InspectionRow
                title="Shut-off Nozzle"
                description="Operates smoothly: Jet, Spray, and Shut."
              />

              <InspectionRow
                title="Main Valve"
                description="Accessible, turns freely, no gland leaks."
              />
            </tbody>
          </table>
        </div>

        {/* COMMENTS */}
        <div className="comments">
          <label>COMMENTS / DEFECTS FOUND:</label>
          <textarea rows="5"></textarea>
        </div>

        {/* FOOTER */}
        <div className="footer">
          Generated for SANS 1475 Compliance Audits. Secure NFC Verification Enabled.
        </div>
      </div>
    </div>
  );
}

/* REUSABLE ROW COMPONENT */
function InspectionRow({ title, description }) {
  return (
    <tr>
      <td>{title}</td>

      <td>{description}</td>

      <td>
        <div className="radio-group">
          <label>
            <input type="radio" name={title} /> Pass
          </label>

          <label>
            <input type="radio" name={title} /> Fail
          </label>
        </div>
      </td>
    </tr>
  );
}
