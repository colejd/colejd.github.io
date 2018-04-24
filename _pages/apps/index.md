---
title: "Apps"
layout: page
description: Apps Jon worked on.
---

<ul style="list-style-type: none;">
{% assign sitepages = site.pages | sort: 'order' %}
{% for sitepage in sitepages %}
  {%- if sitepage.path contains "/apps/" -%}
    {%- unless sitepage.path contains "/apps/index.md" -%}
      {%- include preview-card.html page=sitepage -%}
    {%- endunless -%}
  {%- endif -%}
{% endfor %}
</ul>