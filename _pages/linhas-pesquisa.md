---
layout: page
title: Linhas de Pesquisa
permalink: /linhas-pesquisa/
description: Áreas e linhas de pesquisa do GRAPHID.
nav: true
nav_order: 3.5
horizontal: false
---

  {% assign lines = site.data.linhas_pesquisa | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3">
    {% for line in lines %}
      <div class="col mb-4">
        <div class="card h-100">
          <div class="card-body text-center">
            {% if line.icon %}
              <div class="mb-2" style="font-size: 2rem;">{{ line.icon }}</div>
            {% endif %}
            <h5 class="card-title">{{ line.title }}</h5>
            {% if line.description %}
              <p class="card-text">{{ line.description }}</p>
            {% endif %}
            {% if line.members %}
              <p class="card-text">
                <strong>Pesquisadores:</strong><br>
                {% for member in line.members %}
                  {% assign member_html = member.name | replace: "Sobrenome", '<span class="text-danger">Sobrenome</span>' %}
                  {% if member.link and member.link != "" %}
                    <a href="{{ member.link | relative_url }}">{{ member_html }}</a>
                  {% else %}
                    {{ member_html }}
                  {% endif %}
                  {% unless forloop.last %}&middot;{% endunless %}
                {% endfor %}
              </p>
            {% endif %}
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
