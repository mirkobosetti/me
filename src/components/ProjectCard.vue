<script setup lang="ts"></script>

<template>
  <div class="project-card"></div>
  <img src="https://via.placeholder.com/400x250" alt="Project thumbnail" class="project-image" />
  <div class="project-content">
    <h3 class="project-title">Project Title</h3>
    <p class="project-description">
      This is a sample project description that explains what the project is about and its main
      features or objectives.
    </p>
    <div class="badges">
      <Badge>Badge</Badge>
      <Badge>Badge</Badge>
      <Badge>Badge</Badge>
    </div>
  </div>

  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      Card Content

      <Stepper>
        <StepperItem :step="1">
          <StepperTrigger>
            <StepperIndicator>1</StepperIndicator>
            <StepperTitle>Step 1</StepperTitle>
            <StepperDescription>This is the first step</StepperDescription>
          </StepperTrigger>
          <StepperSeparator />
        </StepperItem>
        <StepperItem :step="2">
          <StepperTrigger>
            <StepperIndicator>2</StepperIndicator>
            <StepperTitle>Step 2</StepperTitle>
            <StepperDescription>This is the second step</StepperDescription>
          </StepperTrigger>
        </StepperItem>
      </Stepper>
    </CardContent>
    <CardFooter>
      Card Footer
      <Progress :model-value="33" />
    </CardFooter>
  </Card>
</template>
