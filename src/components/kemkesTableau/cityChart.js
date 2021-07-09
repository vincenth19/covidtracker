import ScriptTag from "react-script-tag";

export default function CityCharts() {
  return (
    <>
      <div
        className="tableauPlaceholder"
        id="viz1625812926611"
        style={{ position: "relative", height: "1000px", width: "100%" }}
      >
        <noscript>
          <a href="#">
            <img
              alt="asesmen situasi kab "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;as&#47;asesmensituasikabkota&#47;asesmensituasikab&#47;1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <ScriptTag
          type="text/javascript"
          src="https://public.tableau.com/javascripts/api/viz_v1.js"
        />
        <object
          className="tableauViz"
          style={{ display: "none", width: "100%", height: window.innerHeight }}
        >
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param
            name="name"
            value="asesmensituasikabkota&#47;asesmensituasikab"
          />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;as&#47;asesmensituasikabkota&#47;asesmensituasikab&#47;1.png"
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
