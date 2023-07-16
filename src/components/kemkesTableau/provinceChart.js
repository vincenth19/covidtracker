import ScriptTag from "react-script-tag";

export default function ProvinceCharts() {
  return (
    <>
      <div
        className="tableauPlaceholder"
        id="viz1625809327914"
        style={{
          position: "relative",
          height: "1000px",
          width: "100%",
        }}
      >
        <noscript>
          <a href="https://covidtracker.pages.dev/home">
            <img
              alt="assesm prov "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;as&#47;asesmensituasiprovinsi&#47;assesmprov&#47;1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <ScriptTag
          type="text/javascript"
          src="https://public.tableau.com/javascripts/api/viz_v1.js"
        />
        <object
          id="obj"
          className="tableauViz"
          style={{ border: "none", width: "100%", height: window.innerHeight }}
        >
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param
            name="path"
            value="views&#47;asesmensituasiprovinsi&#47;assesmprov?:embed=yes"
          />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;as&#47;asesmensituasiprovinsi&#47;assesmprov&#47;1.png"
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
