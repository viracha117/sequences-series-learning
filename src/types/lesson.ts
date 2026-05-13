export interface Lesson {
  id: string;
  courseId: string;
  chapterId: string;
  titleTh: string;
  titleEn: string;
  descriptionTh: string;
  descriptionEn: string;
  content: LessonContent[];
  examples: Example[];
  exercises: Exercise[];
  duration: number;
  order: number;
  prerequisites?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface LessonContent {
  type: 'text' | 'heading' | 'formula' | 'image' | 'video' | 'note' | 'warning';
  contentTh: string;
  contentEn: string;
  metadata?: {
    imageUrl?: string;
    videoUrl?: string;
    formula?: string;
    level?: 'info' | 'warning' | 'success' | 'error';
  };
}

export interface Example {
  id: string;
  titleTh: string;
  titleEn: string;
  problemTh: string;
  problemEn: string;
  solutionTh: string;
  solutionEn: string;
  steps: Step[];
  explanation?: string;
}

export interface Step {
  title: string;
  description: string;
  formula?: string;
}

export interface Exercise {
  id: string;
  titleTh: string;
  titleEn: string;
  problemTh: string;
  problemEn: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hint?: string;
  solution?: string;
}

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  startedAt: string;
  completedAt?: string;
  timeSpent: number;
  exercisesCompleted: number;
}
