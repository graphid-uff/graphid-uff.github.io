---
layout: page
title: Publicações Recentes
title_en: Recent Publications
permalink: /publicacoes/
description:
description_en:
nav: true
nav_order: 4
dropdown: true
children:
  - title: Artigos
    title_en: Articles
    permalink: /publicacoes/#artigos-pane
    count_from: publicacoes
  - title: Resumos
    title_en: Abstracts
    permalink: /publicacoes/#resumos-pane
    count_from: resumos
horizontal: false
_styles: >
  .publicacoes-tabs {
    margin-bottom: 1.5rem;
    border-bottom-color: var(--global-divider-color);
  }
  .publicacoes-tabs .nav-link {
    color: var(--global-text-color-light);
    border: none;
    border-bottom: 2px solid transparent;
    border-radius: 0;
    font-size: 0.95rem;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
  .publicacoes-tabs .nav-link:hover {
    color: var(--global-text-color);
    border-color: transparent;
  }
  .publicacoes-tabs .nav-link.active {
    color: var(--global-text-color);
    background-color: transparent;
    border-color: var(--global-theme-color);
  }
---

<!-- pages/publicacoes.md -->
<ul class="nav nav-tabs publicacoes-tabs" id="publicacoesTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a
      class="nav-link active"
      id="artigos-tab"
      data-toggle="tab"
      href="#artigos-pane"
      role="tab"
      aria-controls="artigos-pane"
      aria-selected="true"
    >
      <span class="lang-pt">Artigos</span><span class="lang-en" hidden>Articles</span>
    </a>
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="resumos-tab"
      data-toggle="tab"
      href="#resumos-pane"
      role="tab"
      aria-controls="resumos-pane"
      aria-selected="false"
    >
      <span class="lang-pt">Resumos</span><span class="lang-en" hidden>Abstracts</span>
    </a>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane fade show active" id="artigos-pane" role="tabpanel" aria-labelledby="artigos-tab">
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
  </div>

  <div class="tab-pane fade" id="resumos-pane" role="tabpanel" aria-labelledby="resumos-tab">
    <div class="publications">
      {% assign sorted_resumos = site.resumos | sort: "importance" %}
      {% assign grouped_resumos = sorted_resumos | group_by: "year" %}
      {% assign grouped_resumos = grouped_resumos | sort: "name" | reverse %}

      {% for group in grouped_resumos %}
        {% assign year_id = group.name | slugify | prepend: "resumo-" %}
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
          {% for resumo in group.items %}
            {% include resumos.liquid %}
          {% endfor %}
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<script>
  (function () {
    function activatePublicacoesTabFromHash() {
      var hash = window.location.hash;
      if (hash === "#artigos-pane" || hash === "#resumos-pane") {
        $('a[href="' + hash + '"]').tab("show");
      }
    }
    activatePublicacoesTabFromHash();
    window.addEventListener("hashchange", activatePublicacoesTabFromHash);
  })();
</script>
