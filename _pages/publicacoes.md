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
    <h2 class="bibliography">{{ group.name }}</h2>
    <div class="publication-list">
      {% for publicacao in group.items %}
        {% include publicacoes.liquid %}
      {% endfor %}
    </div>
  {% endfor %}
</div>
