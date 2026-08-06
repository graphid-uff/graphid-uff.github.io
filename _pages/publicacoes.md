---
layout: page
title: Publicações Recentes
title_en: Recent Publications
permalink: /publicacoes/
description:
description_en:
nav: true
nav_order: 4
horizontal: false
---

<!-- pages/publicacoes.md -->
<div class="publications">
  {% assign sorted_publicacoes = site.publicacoes | sort: "importance" %}
  {% assign grouped_publicacoes = sorted_publicacoes | group_by: "year" %}
  {% assign grouped_publicacoes = grouped_publicacoes | sort: "name" | reverse %}

  {% for group in grouped_publicacoes %}
    {% assign year_id = group.name | slugify %}
    <h2 class="bibliography">
      <button
        class="year-toggle-btn"
        type="button"
        data-toggle="collapse"
        data-target="#year-{{ year_id }}"
        aria-expanded="true"
        aria-controls="year-{{ year_id }}"
      >
        <i class="fa-solid fa-chevron-down year-toggle-icon"></i>
        {{ group.name }}
        <span class="year-count">({{ group.items | size }})</span>
      </button>
    </h2>
    <div id="year-{{ year_id }}" class="publication-list collapse show">
      {% for publicacao in group.items %}
        {% include publicacoes.liquid %}
      {% endfor %}
    </div>
  {% endfor %}
</div>
