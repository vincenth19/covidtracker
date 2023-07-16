import ScriptTag from "react-script-tag";

export default function ProvinceVaccChart() {
  return (
    <>
      <div
        class="tableauPlaceholder"
        id="viz1628591762646"
        style={{ position: "relative", height: "1000px", width: "100%" }}
      >
        <noscript>
          <a href="https:&#47;&#47;vaksin.kemkes.go.id&#47;">
            <img
              alt="Map by Province "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Da&#47;DashboardVaksinKemkes&#47;MapbyProvince&#47;1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <ScriptTag
          type="text/javascript"
          src="https://public.tableau.com/javascripts/api/viz_v1.js"
        />
        <object
          class="tableauViz"
          style={{ display: "none", width: "100%", height: window.innerHeight }}
        >
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />{" "}
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="DashboardVaksinKemkes&#47;MapbyProvince" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Da&#47;DashboardVaksinKemkes&#47;MapbyProvince&#47;1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
        </object>
      </div>
    </>
  );
}
