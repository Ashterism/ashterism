---
layout: page
title: style-guide
permalink: /style-guide/
---

## Basic Display of Image and Video

### Full-Width Image

**Example:**

<figure>
    <img src="/assets/images/25_04/10th_greenNoiseRemoved_edit_sml600.png" alt="Full-width image example">
    <figcaption>Full-width image example</figcaption>
</figure>

**Usage:**

To display an image that spans the full width of its parent container, simply use the standard `<img>` tag within a `<figure>` element (optional for the caption). No specific classes are required for this basic full-width behavior.

### Image Grid

**Example:**

<div class="image-grid">
  <figure>
    <img src="/assets/images/25_03/138A3229.jpg" alt="Example image 1">
    <figcaption>Image 1</figcaption>
  </figure>
  <figure>
    <img src="/assets/images/25_03/138A3293.jpg" alt="Example image 2">
    <figcaption>Image 2</figcaption>
  </figure>
  <figure>
    <img src="/assets/images/25_03/138A3374.jpg" alt="Example image 3">
    <figcaption>Image 3</figcaption>
  </figure>
</div>

**Usage:**

Create a flexible grid of images by wrapping your `<figure>` elements (containing `<img>` and optional `<figcaption>`) within a `div` with the class `.image-grid`. The grid will automatically arrange the images based on the available space.

### Video Example

**Example:**

<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/PmEsczIhK4I" frameborder="0" allowfullscreen></iframe>
</div>

**Usage:**

To embed a responsive video that maintains its aspect ratio, wrap your `<iframe>` element within a `div` with the class `.video-wrapper`.

## Photo Grid Layouts

### 2x3 Photo Grid

**Example:**

<div class="photo-grid">
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3229.jpg" alt="Example image 1">
    <figcaption>Example image 1</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3293.jpg" alt="Example image 2">
    <figcaption>Example image 2</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3374.jpg" alt="Example image 3">
    <figcaption>Example image 3</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3450.jpg" alt="Example image 4">
    <figcaption>Example image 4</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3531.jpg" alt="Example image 5">
    <figcaption>Example image 5</figcaption>
  </figure>
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3531.jpg" alt="Example image 6">
    <figcaption>Example image 6</figcaption>
  </figure>
</div>

**Usage:**

Create a 2x3 grid of media items by wrapping six `<figure>` elements within a `div` with the class `.photo-grid`. For image content, each `<figure>` should also include the `.media-card` class to apply the standard image card styling. This layout is responsive and adapts to smaller screens.

### 2x1 Photo Grid (Image and Video)

**Example:**

<div class="photo-grid">
  <figure class="media-card">
    <img src="/assets/images/25_03/138A3618.jpg" alt="Example image">
    <figcaption>Image in 2x1 grid</figcaption>
  </figure>
  <div class="media-card grid-video-wrapper">
    <iframe src="https://www.youtube.com/embed/PmEsczIhK4I" frameborder="0" allowfullscreen></iframe>
    <figcaption>Video in 2x1 grid</figcaption>
  </div>
</div>

**Usage:**

To create a 2x1 grid where one element is an image and the other is a video, wrap two elements within a `div` with the class `.photo-grid`. For the image, use a `<figure>` with the `.media-card` class. For the video, use a `div` with both the `.media-card` and `.grid-video-wrapper` classes, containing your `<iframe>` and an optional `<figcaption>`.

## Image Cards

### Standard Image Card

**Example:**

<div class="image-card-wrapper">
    <figure class="media-card">
        <img src="/assets/images/25_04/10th_greenNoiseRemoved_edit_sml600.png" alt="Example image">
        <figcaption>Standard image card with caption</figcaption>
    </figure>
</div>

**Usage:**

The Standard Image Card is created by wrapping a `<figure>` element (containing an `<img>` and an optional `<figcaption>`) with the classes `.media-card` inside a `div` with the class `.image-card-wrapper`. It displays the image with a subtle shadow, rounded corners, and a slight scale-up effect on hover. The card's width is determined by the width of the image.

**Key Attributes:**

* Max width: `100%`
* Border radius: `8px`
* Box shadow: `0 4px 20px rgba(0, 0, 0, 0.15)`
* Transition on hover: `scale(1.02)`

### Centered Image Card

**Example:**

<div class="image-card-wrapper center">
    <figure class="media-card">
        <img src="/assets/images/25_03/138A3531.jpg" alt="Centered example image">
        <figcaption>Centered image card</figcaption>
    </figure>
</div>

**Usage:**

To create a centered image card, add the `.center` class to the `.image-card-wrapper`. This will horizontally center the image card on the page. It retains all the styling of the Standard Image Card.

### Right-Aligned Image Card

**Example:**

<div class="image-card-wrapper right">
    <figure class="media-card">
        <img src="/assets/images/25_04/10th_greenNoiseRemoved_edit.png" alt="Right-aligned image card">
        <figcaption>Right-aligned image card</figcaption>
    </figure>
</div>

**Usage:**

To right-align an image card, add the `.right` class to the `.image-card-wrapper`. On larger screens, the card will float to the right with a margin on the left. On smaller screens, it will be centered. It inherits the styling of the Standard Image Card.

## Notes and Tips

> [!NOTE]
> This is a note.

**Usage:**

Use this block to display important notes or information. It is styled with a distinct visual cue to draw attention.

> [!TIP]
> This is a tip.

**Usage:**

Utilize this block to provide helpful tips or suggestions to the user. It features a different visual style to distinguish it from notes.
