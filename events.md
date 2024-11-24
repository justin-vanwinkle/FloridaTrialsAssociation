---
layout: default
title: Event Schedule
---

# Event Schedule

{% if site.data.events %}
  {% for event in site.data.events %}
  <div class="card bg-base-100 shadow-xl mb-6">
    <div class="card-body">
      <h2 class="card-title">{{ event.name }}</h2>
      <div class="flex flex-col gap-2">
        <p><span class="font-bold">Date:</span> {{ event.date }}</p>
        <p><span class="font-bold">Location:</span> {{ event.location }}</p>
        <div class="card-actions justify-end">
          {% if event.registration_open %}
            <a href="{{ event.registration_link }}" class="btn btn-primary">Register Now</a>
          {% else %}
            <button class="btn btn-disabled">Registration Not Open</button>
          {% endif %}
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
{% else %}
  <div class="alert alert-info">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>No events are currently scheduled. Please check back later.</span>
  </div>
{% endif %} 